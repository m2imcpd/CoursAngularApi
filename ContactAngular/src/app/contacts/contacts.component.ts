import { Component, OnInit } from '@angular/core';
import {ApiService} from "./../api.service"
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts : any;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.get('contact').subscribe(res=> {
      this.contacts = res;
    })
  }

  Delete = (id) => {
    this.api.delete('contact/'+id).subscribe((res:any)=> {
      if(!res.error)
      {
        // this.contacts.splice(this.contacts.findIndex(c=> c.id == id),1);
        //re-actualiser les contacts en utilisant le get de l'api
        this.api.get('contact').subscribe(res=> {
          this.contacts = res;
        })
      }
      alert(res.message);
    })
  }
}
