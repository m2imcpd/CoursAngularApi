import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-test-jwt',
  templateUrl: './test-jwt.component.html',
  styleUrls: ['./test-jwt.component.css']
})
export class TestJwtComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  LogIn = () => {
    const headers = new HttpHeaders();
    headers.append("content-type","application/json");
    this.http.post('http://localhost:50877/users', {Email :"ihab@utopios.net", Password : "123456"},{headers : headers}).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem("token", res.message) 
    },err => {
      console.log(err);
      alert('Error connection');
    })
  }

}
