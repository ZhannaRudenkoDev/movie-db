import { Component, OnInit } from '@angular/core';
import { ApiPageAbstract } from "../../../shared/abstract/api-page.abstract";
import { ApiService } from "../../../shared/services/api.service";
import { switchMap, tap } from "rxjs";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent extends ApiPageAbstract implements OnInit {

  constructor(public override apiService: ApiService) {
    super(apiService)
  }
  ngOnInit(): void {
    this.gridData = this.hasChanges$.pipe(
      switchMap(() => {
        return this.apiService.getTVShows();
      }),
      tap(data => {
        this.gridDataCount = data.length;
      })
    );
  }

}
