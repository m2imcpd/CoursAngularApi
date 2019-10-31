import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpEventType } from '@angular/common/http';

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
  formData: FormData;
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.testAccess('testLogin').subscribe((res:any)=> {
      if(res.error)
      {
        this.router.navigate(['/login']);
      }
    }, err=> {
      this.router.navigate(['/login']);
    })
    if (this.route.snapshot.params.id != undefined) {
      this.api.get('contact/' + this.route.snapshot.params.id).subscribe((res: any) => {
        this.id = res.id;
        this.nom = res.nom;
        this.prenom = res.prenom;
        this.email = res.email;
      })
    }
    this.formData = new FormData();
  }
  UploadFile = (files) => {
    if (files.length === 0)
      return
    this.formData.append('avatar', files[0]);
  }
  Add = () => {
    const contact = { Nom: this.nom, Prenom: this.prenom, Email: this.email };
    for (let k in contact) {
      console.log(k + " "+ contact[k]);
      this.formData.append(k, contact[k]);
    }
    if (this.id == undefined) {
      this.api.upload('contact', this.formData).subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total))
        }
        else if (event.type == HttpEventType.Response) {
          const res = <any>event.body;
          if (!res.error) {
            alert(res.message + " " + res.contactId);
            this.router.navigate(["/"]);
          }
          else {
            alert(res.message);
          }
        }
      })
      // this.api.post('contact', contact).subscribe((res: any) => {
      //   if (!res.error) {
      //     alert(res.message + " " + res.contactId);
      //     this.router.navigate(['/']);
      //   }
      //   else {
      //     alert(res.message);
      //   }
      // })

    }
    else {
      this.api.put('contact/' + this.id, contact).subscribe((res: any) => {
        alert(res.message);
        if (!res.error)
          this.router.navigate(['/']);
      })
    }
    this.formData = new FormData();
  }
  
}
