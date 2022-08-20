import { Item } from './../models/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item[] = [
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
  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
