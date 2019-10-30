import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UploadComponent } from './upload/upload.component';
import { TestJwtComponent } from './test-jwt/test-jwt.component';
import { ProtectedByJwtComponent } from './protected-by-jwt/protected-by-jwt.component';


const routes: Routes = [
  {path : "", component : ContactsComponent},
  {path : "Add", component : AddContactComponent},
  {path : "update/:id", component : AddContactComponent},
  {path : "upload", component : UploadComponent},
  {path : "JWT", component : TestJwtComponent},
  {path : "JWTPROTECTED", component : ProtectedByJwtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
