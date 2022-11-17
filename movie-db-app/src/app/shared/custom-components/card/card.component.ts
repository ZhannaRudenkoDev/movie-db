import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ApproveDialogComponent } from "../approve-dialog/approve-dialog.component";
import { JsonServerService } from "../../services/json-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";


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
    this.jsonServer.addMovie(this.movie).subscribe(
      () => {
        const dialogRef = this.dialog.open(ApproveDialogComponent, {
          maxWidth: '560px',
        });
        dialogRef.afterClosed().subscribe(() => {
          this.suggestedFlag = true;
        })
      },
      () => {
        this.openSnackBar('Something went wrong', 'Ok')
      },
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private jsonServer: JsonServerService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
     this.suggestFlag = url[0].path === 'suggest'
    })
  }

}
