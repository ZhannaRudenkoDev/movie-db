import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieModel } from "../../models/movie.model";
import { ApiService } from "../../services/api.service";
import { switchMap, tap } from "rxjs";

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  movie!: MovieModel;
  genres!: string;

  id: number = 0

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => this.id = params['id']),
      switchMap(() => this.apiService.getMovieDetails(this.id)),
      tap(data => {
        this.movie = data;
        data.genres.forEach(item => {
          this.genres = this.genres ? this.genres + ', ' + item.name : item.name;
        })
      })
    ).subscribe()
  }


}
