import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:Item[] = [];
  total:number = 0;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'Pan',
        price: 2,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        title: 'Chamarra',
        price: 300,
        quantity: 2,
        completed: false
      },
    ];

    this.getTotal();
  }

  deleteItem(item: Item) {
    // Exclude the item with id sent to be deleted
    this.items = this.items.filter(x => x.id !== item.id); 
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                  .filter(item => !item.completed)          // Return array of items with complete=false
                  .map(item => item.quantity * item.price)  // Return array of total by each item
                  .reduce( (acc, item) => acc += item, 0);  // take each value of array and accumulate it to be return
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

}
