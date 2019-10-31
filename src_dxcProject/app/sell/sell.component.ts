import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';
import { UserdisplayComponent } from '../userdisplay/userdisplay.component';
import {HttpClient,HttpEventType,HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

pathName:string;
  constructor(private itemSrv : ItemService, private http: HttpClient    ) { }

  percentDone: number;
  uploadSuccess: boolean;
  data: Object;
  f1:string;
  features:string[];
  userId: string;
  item:Item={
    "itemId":"",
    "itemName":"",
    "desc":"",
    "cost":0,
    "status":false,
    "userId":"",
    "path":this.f1
  }
  Files:File[];
  uploadAndProgress(files: File[]){

    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))

    this.http.post('http://localhost:1002/api/files', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {

        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);

        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;

        }

    });
  }

upload(files: File[]){
  this.f1=files[0].name;
  this.item.path="assets/Images/"+this.f1;
  this.uploadAndProgress(files);
}

upload1(files:File[]){

  this.Files=files;
}

  saveItem() {
   this.upload(this.Files);
    this.itemSrv.saveItem(this.item).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

ngOnInit() {
  }

}
