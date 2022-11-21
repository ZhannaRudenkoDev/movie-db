import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, pluck } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiResponseModel } from "../models/api-response.model";
import { MovieModel } from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://api.themoviedb.org";

  constructor(private http: HttpClient) { }


  getAll(): Observable<MovieModel[]> {
    return forkJoin({
      movies: this.getMovies(),
      tvShows: this.getTVShows()
    }).pipe(
      map(data => {
        return [ ...data.movies, ...data.tvShows]
      })
    )
  }

  getMovies(): Observable<MovieModel[]> {
    return forkJoin({
      popular: this.http.get<ApiResponseModel>(`${this.baseUrl}/3/movie/popular?language=en-US`).pipe( pluck('results')),
      top_rated: this.http.get<ApiResponseModel>(`${this.baseUrl}/3/movie/top_rated?language=en-US`).pipe( pluck('results')),
      upcoming: this.http.get<ApiResponseModel>(`${this.baseUrl}/3/movie/upcoming?language=en-US`).pipe( pluck('results')),
    }).pipe(
      map(data => {
        return [ ...data.top_rated,  ...data.popular, ...data.upcoming]
      }),
      map(data => {
        return data.map(item => {
          return { ...item, isMovie: true}
        })
      })
    )
  }

  getMoviesCount(): Observable<number> {
    return this.getMovies().pipe(
      map(data => {
        return data.length;
      })
    )
  }

  getTvCount(): Observable<number> {
    return this.getTVShows().pipe(
      map(data => {
        return data.length;
      })
    )
  }


  getTVShows(): Observable<MovieModel[]> {
    return forkJoin({
      popular: this.http.get<ApiResponseModel>(`${this.baseUrl}/3/tv/popular?language=en-US`).pipe( pluck('results')),
      top_rated: this.http.get<ApiResponseModel>(`${this.baseUrl}/3/tv/top_rated?language=en-US`).pipe( pluck('results')),
    }).pipe(
      map(data => {
        return [ ...data.top_rated,  ...data.popular ]
      }),
      map(data => {
        return data.map(item => {
          return { ...item, isMovie: false}
        })
      })
    )
  }

  getMovieDetails(id: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${this.baseUrl}/3/movie/${id}?language=en-US`);
  }

  getTvDetails(id: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${this.baseUrl}/3/tv/${id}?language=en-US`);
  }

  getSearchValues(value: string): Observable<MovieModel[]> {
    return this.http.get<ApiResponseModel>(`${this.baseUrl}/3/search/multi?language=en-US&adult=false&query=${value}`).pipe(
      pluck('results'),
      map(data => {
        return data.filter(item => item.media_type === 'movie' || item.media_type === 'tv')
      }),
      map(data => {
        return data.map(item => {
          return { ...item, isMovie: item.media_type === 'movie'}
        })
      })
    )
  }

}
