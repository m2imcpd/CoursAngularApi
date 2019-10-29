import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl = "http://localhost:59283";
  constructor(private http:HttpClient) { 

  }

  get = (url) => {
    return this.http.get(this.baseUrl + '/'+url);
  }

  post = (url, data) => {
    return this.http.post(this.baseUrl+"/"+url,data);
  }
}
