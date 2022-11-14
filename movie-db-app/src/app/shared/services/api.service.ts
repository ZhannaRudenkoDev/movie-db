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
      pluck('results')
    )
  }


  getTVShows(): Observable<MovieModel[]> {
    return this.http.get<ApiResponseModel>(`${this.baseUrl}/3/tv/popular?api_key=ff767a08fc1285474f8f591370d12441&language=en-US`).pipe(
      pluck('results')
    )
  }


}
