import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApproveDialogComponent } from "../approve-dialog/approve-dialog.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie!: MovieModel;


  suggestFlag: boolean = false;
  suggestedFlag: boolean = false;

  getDetails(id: number, isMovie: boolean) {
    if(isMovie) {
      this.router.navigate(['/movies', id]);
    } else {
      this.router.navigate(['/tv', id]);
    }
  }

  suggested() {
    const dialogRef = this.dialog.open(ApproveDialogComponent, {
      maxWidth: '560px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.suggestedFlag = true;
    })
  }

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
     this.suggestFlag = url[0].path === 'suggest'
    })
  }

}
