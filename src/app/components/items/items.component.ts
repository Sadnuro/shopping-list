import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:Item[] = [];
  total:number = 0;

  // Se debe injectar la variable del servicio (instancia)
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();

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
