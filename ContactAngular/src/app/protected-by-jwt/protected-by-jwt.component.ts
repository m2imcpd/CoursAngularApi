import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-protected-by-jwt',
  templateUrl: './protected-by-jwt.component.html',
  styleUrls: ['./protected-by-jwt.component.css']
})
export class ProtectedByJwtComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem("token")
    });
    console.log(headers);
    this.http.get('http://localhost:50877/testConnection', {headers : headers}).subscribe((res:any) => {
      console.log(res);
      
    },err => {
      console.log(err);
      this.router.navigate(['/']);
    })
  }

}
