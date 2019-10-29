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

}
