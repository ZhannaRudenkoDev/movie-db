import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../../shared/models/user.model";
import { UserService } from "../../../shared/services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: UserModel = {
    email: '',
    userPassword: '',
    role: ''
  }

  constructor(private userService: UserService,  private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  getEmail(value: string) {
    this.user.email = value;
  }

  getPassword(value: string) {
    this.user.userPassword = value
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }


  login() {
    console.log(this.user);
    this.userService.logIn(this.user.email, this.user.userPassword).subscribe(
      (role) => {
        this.openSnackBar('You logged in!', 'Ok');
        if(role === 'user') {
          this.router.navigate([''])
        }
      },
      () => {
        this.openSnackBar('Something went wrong', 'Ok')
      },
    )
  }

}
