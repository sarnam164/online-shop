import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService, private router:Router, private snackbar:MatSnackBar) {
    this.user.enabled = true;
    this.user.role = 'USER';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe(
      data=>{
        console.log(data);
        let snackBarRef = this.snackbar.open("Successfull added User", "Close");
        this.goToLoginPage();
      },
      error=>{
        console.log(error);
        let snackBarRef = this.snackbar.open("Failed to register User", "Close");
      }
    )
  }

  goToLoginPage(){
    this.router.navigate(['/login']);
  }

}
