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
    return this.http.get<ApiResponseModel>(`${this.baseUrl}/3/movie/popular?api_key=ff767a08fc1285474f8f591370d12441&language=en-US`).pipe(
      pluck('results'),
      map(data => {
        return data.map(item => {
          return { ...item, isMovie: true}
        })
      })
    )
  }


  getTVShows(): Observable<MovieModel[]> {
    return this.http.get<ApiResponseModel>(`${this.baseUrl}/3/tv/popular?api_key=ff767a08fc1285474f8f591370d12441&language=en-US`).pipe(
      pluck('results'),
      map(data => {
        return data.map(item => {
          return { ...item, isMovie: false}
        })
      })
    )
  }

  getMovieDetails(id: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${this.baseUrl}/3/movie/${id}?api_key=ff767a08fc1285474f8f591370d12441&language=en-US`);
  }

  getTvDetails(id: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${this.baseUrl}/3/tv/${id}?api_key=ff767a08fc1285474f8f591370d12441&language=en-US`);
  }

  getSearchValues(value: string): Observable<MovieModel[]> {
    return this.http.get<ApiResponseModel>(`${this.baseUrl}/3/search/multi?api_key=ff767a08fc1285474f8f591370d12441&language=en-US&query=${value}`).pipe(
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
