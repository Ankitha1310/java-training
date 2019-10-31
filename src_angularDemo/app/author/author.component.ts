import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../Author.model';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input("author") author:Author;

  constructor() { }

  ngOnInit() {
  }

}











  //--------APP COMP TS----------------------------
//   authorName;
// authorId;
// phone;
// phoneArray =[];
// author = new Author();


// add(){

//   this.phoneArray.push(this.phone);
//   this.phone=null;
// }

//   sendChild(){
//     this.author.authorName = this.authorName;
//     this.author.authorId = this.authorId;
//     this.phoneArray.push(this.phone);
//     this.author.phone=this.phoneArray;

//     this.authorName=null;
//     this.authorId=null;
//     this.phone=null;
//   }

