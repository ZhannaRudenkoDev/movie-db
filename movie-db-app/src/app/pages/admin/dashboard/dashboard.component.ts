import { Component, OnInit } from '@angular/core';
import { JsonServerService } from "../../../shared/services/json-server.service";
import { ApiService } from "../../../shared/services/api.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  moviesCount = 0;
  tvShowsCount = 0;
  suggestionsCount = 0;
  manualCount = 0;

  constructor(private jsonServerService: JsonServerService, private apiService: ApiService) { }

  ngOnInit(): void {
    forkJoin({
      movies: this.apiService.getMoviesCount(),
      tvShows: this.apiService.getTvCount(),
      suggest: this.jsonServerService.getSuggestCount(),
      manual: this.jsonServerService.getManual()
    }).subscribe(data => {
      this.moviesCount = data.movies;
      this.tvShowsCount = data.tvShows;
      this.suggestionsCount = data.suggest;
      this.manualCount = data.manual
    })
  }

}
