import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  delete = (url) => {
    return this.http.delete(this.baseUrl+"/"+url);
  }
  put = (url,data) => {
    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem("token")
    });
    return this.http.put(this.baseUrl+"/"+url,data, {headers : headers});
  }

  login = (url, email, password) => {
    const headers = new HttpHeaders();
    headers.append("content-type","application/json");
    return this.http.post(this.baseUrl + '/'+url, {Email :email, Password : password},{headers : headers})
  }

  upload = (url, formdata)=> {
    //pour envoyer une requete vers une api protegée par un jwt, il faut ajouter dans l'entete de la requete l'authorization avec le token
    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem("token")
    });
    //reportProgress => pour ecouter la progression de l'upload; observe => pour ecouter la totalité de l'event et non uniquement la réponse du serveur
    return this.http.post(this.baseUrl+'/'+url, formdata,{headers : headers,reportProgress: true, observe:'events'})
  }

  testAccess = (url) => {
    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer "+localStorage.getItem("token")
    });
    return this.http.post(this.baseUrl + "/"+url,{}, {headers : headers});
  }
}
