import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {
authors:any[];
  constructor() {

  this.authors  = [
    {authorId:1,authorName:'raj',authorGender:'male'},
    {authorId:2,authorName:'rajeev',authorGender:'male'},
    {authorId:3,authorName:'rajeshwari',authorGender:'female'},
    {authorId:4,authorName:'rajni',authorGender:'female'}
    ]
  }
    getAuthors()
  {
      return this.authors;
  }

}

