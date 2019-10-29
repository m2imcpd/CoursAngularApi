import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  nom: any;
  prenom: any;
  email: any;
  id: any = undefined;
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params.id != undefined) {
      this.api.get('contact/' + this.route.snapshot.params.id).subscribe((res: any) => {
        this.id = res.id;
        this.nom = res.nom;
        this.prenom = res.prenom;
        this.email = res.email;
      })
    }
  }

  Add = () => {
    const contact = { Nom: this.nom, Prenom: this.prenom, Email: this.email };
    if (this.id == undefined) {
      this.api.post('contact', contact).subscribe((res: any) => {
        if (!res.error) {
          alert(res.message + " " + res.contactId);
          this.router.navigate(['/']);
        }
        else {
          alert(res.message);
        }
      })
    }
    else {
      this.api.put('contact/'+this.id, contact).subscribe((res:any)=> {
        alert(res.message);
        if(!res.error)
        this.router.navigate(['/']);
      })
    }

  }

}
