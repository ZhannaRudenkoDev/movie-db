import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from "../../models/movie.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie!: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
