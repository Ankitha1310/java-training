import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { UserService } from '../UserService';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userSrv:UserService) { }

  ngOnInit() {
  }

  user_id:string;
  newpass:string;
  temp:string;

  reset(){

    this.userSrv.reset(this.user_id,this.newpass).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }


}
