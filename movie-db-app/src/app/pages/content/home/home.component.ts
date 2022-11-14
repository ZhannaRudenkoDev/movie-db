import { Component, OnInit } from '@angular/core';
import { MovieModel } from "../../../shared/models/movie.model";
import { ApiService } from "../../../shared/services/api.service";
import {BehaviorSubject, map, Observable, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gridData!: Observable<MovieModel[]>;
  public gridDataCount: number = 0;
  public ontoggleBtnAll = 'btn-change';
  public ontoggleBtnMovies = 'btn-static';
  public ontoggleBtnShows = 'btn-static';

  private hasChanges$ = new BehaviorSubject(true);

  toggleCards(button: string) {
    switch (button) {
      case 'all':
        this.ontoggleBtnAll = 'btn-change';
        this.ontoggleBtnMovies = 'btn-static';
        this.ontoggleBtnShows = 'btn-static';
        break;
      case 'movies':
        this.ontoggleBtnAll = 'btn-static';
        this.ontoggleBtnMovies = 'btn-change';
        this.ontoggleBtnShows = 'btn-static';
        break;
      case 'shows':
        this.ontoggleBtnAll = 'btn-static';
        this.ontoggleBtnMovies = 'btn-static';
        this.ontoggleBtnShows = 'btn-change';
        break;
    }
    this.hasChanges$.next(true);
  }

  /*  mockMovie: MovieModel ={
      adult: false,
      backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genre_ids: [
        28,
        14,
        878
      ],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 4328.431,
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 6.9,
      vote_count: 1058
    }*/

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.gridData = this.hasChanges$.pipe(
      switchMap(() => {
        if(this.ontoggleBtnShows === 'btn-change') {
          return this.apiService.getTVShows();
        } else if(this.ontoggleBtnMovies === 'btn-change') {
          return this.apiService.getMovies();
        } else {
          return this.apiService.getAll();
        }
      }),
      tap(data => {
        data.forEach(() => {
          this.gridDataCount++;
        })
      })
    );

  }

}
