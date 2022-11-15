import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../shared/services/api.service";
import { switchMap, tap } from "rxjs";
import { ApiPageAbstract } from "../../../shared/abstract/api-page.abstract";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ApiPageAbstract implements OnInit {

  public ontoggleBtnAll = 'btn-change';
  public ontoggleBtnMovies = 'btn-static';
  public ontoggleBtnShows = 'btn-static';

  toggleCards(button: string) {
    switch (button) {
      case 'all':
        this.ontoggleBtnAll = 'btn-change';
        this.ontoggleBtnMovies = 'btn-static';
        this.ontoggleBtnShows = 'btn-static';
        this.titleCount = 'All'
        break;
      case 'movies':
        this.ontoggleBtnAll = 'btn-static';
        this.ontoggleBtnMovies = 'btn-change';
        this.ontoggleBtnShows = 'btn-static';
        this.titleCount = 'Movies'
        break;
      case 'shows':
        this.ontoggleBtnAll = 'btn-static';
        this.ontoggleBtnMovies = 'btn-static';
        this.ontoggleBtnShows = 'btn-change';
        this.titleCount = 'TV Shows'
        break;
    }
    this.hasChanges$.next(true);
  }


  constructor(public override apiService: ApiService) {
    super(apiService)
  }

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
        this.gridDataCount = data.length;
      })
    );
  }

}
