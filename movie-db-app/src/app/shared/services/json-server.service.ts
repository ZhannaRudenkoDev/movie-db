import { Injectable } from '@angular/core';
import { MovieModel } from "../models/movie.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ManualMovieModel } from "../models/manual-movie.model";



@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  constructor(private http: HttpClient) { }

  addMovie(movie: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>('http://localhost:3000/movies', movie);
  }

  addManual(movie: ManualMovieModel): Observable<ManualMovieModel> {
    return this.http.post<ManualMovieModel>('http://localhost:3000/manual', movie);
  }

}
