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

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      this.loginservice.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response);
          this.loginservice.loginUser(response.token);
          window.location.href = "/dashboard";
        },
        (error:any)=>{
          //error
          console.log(error);
        }
      );
    }else{
      console.log('Please enter username and password');
    }
  }

}
