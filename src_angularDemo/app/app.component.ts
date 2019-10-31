import { Component } from '@angular/core';
import { Author } from './Author.model';
import { ServiceDemoService } from '../app/service-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authors:any[]
  //author=new Author();

constructor(private author: ServiceDemoService)
{

this.authors=this.author.getAuthors();
 //let srv=new MysrvService();
//srv.srvMethod();
}


testMeth()
{

  //this.author.getAuthors();
}

}


// display() {
// this.disp = this.test ;
// }
// }

