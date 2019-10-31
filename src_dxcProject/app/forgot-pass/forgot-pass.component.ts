import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { User } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  user_Id:string="";
  ans:string;
  temp:string="";

  user: User={
    userId:"",
    firstName:"",
    lastName:"",
    password:"",
    dob:null,
    address:"",
    phone:0,
    wallet:0,
    key:""
   }

  ngOnInit() {
  }

  constructor(private userSrv: UserService, private router: Router) { }

  forgot()
  {
    this.userSrv.getUser(this.user_Id).subscribe(
      data => {
        this.user = data;
        console.log(this.user.key);
      }
      );

    if(this.user.key===this.ans ){

      this.router.navigateByUrl("/resetpassword");
    }
    else
    {
      alert("Wrong Answer");
    }
  }

}
