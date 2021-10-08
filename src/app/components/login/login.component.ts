import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  hide = true;
  loading = false;

  constructor(private loginservice:LoginService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true;
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      this.loginservice.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response);
          this.loading = false;
          this.loginservice.loginUser(response.token);
          window.location.href = "/dashboard";
        },
        (error:any)=>{
          //error
          console.log(error);
          this.loading = false;
          let snackBarRef = this.snackbar.open("Incorrect Credentials","Close");
        }
      );
    }else{
      let snackBarRef = this.snackbar.open("Enter Username and Password","Close");
    }
  }

}
