import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  pourcentage = 0;
  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  uploadFiles = (files) => {
      const formData = new FormData();
      if(files.length === 0)
      return 
      formData.append('image', files[0]);
      //console.log(formData);
      this.api.upload('upload',formData).subscribe(resEvent=> {
          if(resEvent.type == HttpEventType.UploadProgress){
            this.pourcentage = Math.round(100 * resEvent.loaded / resEvent.total);
          }
          else if(resEvent.type == HttpEventType.Response)
          {
            console.log(resEvent.body);
          }
      });
  }

}
