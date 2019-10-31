import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private api : ApiService, private router : Router) { }

  ngOnInit() {

  }

  LogIn = () => {
    this.api.login('login', this.email, this.password).subscribe((res:any)=> {
      if(!res.error)
      {
        localStorage.setItem('token', res.token);
        this.router.navigate(["/"])
      }
      else{
        alert(res.message);
      }
    }, err=> {
      console.log(err);
    })
  }

}
