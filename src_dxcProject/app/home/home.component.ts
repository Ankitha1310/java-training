import { Component, OnInit } from '@angular/core';
import { Item } from '../Item.model';
import { ItemService } from '../ItemService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private itemSrv : ItemService) { }
  itemList : Item[] = [];

  ngOnInit() {
    this.itemSrv.getAllItems().subscribe(
      data => {this.itemList = data}
     );
  }
}
