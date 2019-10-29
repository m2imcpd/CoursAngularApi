import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  nom:any;
  prenom:any;
  email:any;
  constructor(private api : ApiService, private router:Router) { }

  ngOnInit() {
  }

  Add = () => {
    const contact = {Nom : this.nom, Prenom : this.prenom, Email : this.email};
    this.api.post('contact',contact).subscribe((res:any)=> {
      if(!res.error)
      {
        alert(res.message + " "+res.contactId);
        this.router.navigate(['/']);
      }
      else {
        alert(res.message);
      }
    })
  }

}
