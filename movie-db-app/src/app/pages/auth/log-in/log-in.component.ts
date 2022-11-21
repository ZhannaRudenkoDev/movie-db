import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../../shared/models/user.model";
import { UserService } from "../../../shared/services/user.service";
import { Router } from "@angular/router";
import { SnackBarService } from "../../../shared/services/snackbar.service";

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

  constructor(private userService: UserService,
              private snackBService: SnackBarService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getEmail(value: string) {
    this.user.email = value;
  }

  getPassword(value: string) {
    this.user.userPassword = value
  }


  login() {
    this.userService.logIn(this.user.email, this.user.userPassword).subscribe(
      (role) => {
        if(role === 'user') {
          this.router.navigate([''])
          this.snackBService.openSnackBar('You logged in!', 'Ok');
        } else if(role === 'admin') {
          this.router.navigate(['', 'dashboard'])
          this.snackBService.openSnackBar('You logged in!', 'Ok');
        }
      },
    )
  }

}
