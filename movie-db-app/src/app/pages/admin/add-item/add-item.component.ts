import { Component, OnInit } from '@angular/core';
import { ApiPageAbstract } from "../../../shared/abstract/api-page.abstract";
import { ApiService } from "../../../shared/services/api.service";
import { SearchService } from "../../../shared/services/search.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent extends ApiPageAbstract implements OnInit {

  constructor(public override apiService: ApiService, private searchService: SearchService) {
    super(apiService)
  }

  ngOnInit(): void {
  }

  searchData() {
    this.gridData = this.searchService.getSearchValues(this.searchValue);
  }

}
