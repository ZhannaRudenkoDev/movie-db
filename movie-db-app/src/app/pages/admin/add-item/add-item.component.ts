import { Component, OnInit } from '@angular/core';
import { ApiPageAbstract } from "../../../shared/abstract/api-page.abstract";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent extends ApiPageAbstract implements OnInit {

  constructor(public override apiService: ApiService) {
    super(apiService)
  }

  ngOnInit(): void {
  }

  searchData() {
    this.gridData = this.apiService.getSearchValues(this.searchValue);
  }

}
