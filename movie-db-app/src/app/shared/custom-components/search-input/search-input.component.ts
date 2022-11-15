import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();


  valueChange(newValue: any) {
    this.searchValue.emit(newValue.target.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
