import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie!: MovieModel;

  suggestFlag: boolean = false;

  getDetails(id: number, isMovie: boolean) {
    if(isMovie) {
      this.router.navigate(['/movies', id]);
    } else {
      this.router.navigate(['/tv', id]);
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
     this.suggestFlag = url[0].path === 'suggest'
    })
  }

}
