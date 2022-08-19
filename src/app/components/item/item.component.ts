import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item();     // Accessed from father as [item]
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**Are need send the data of the item to delete to father items component
   * for that, must declare @Output EventEmmiter<> variable
   */
  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  onToggle(item: Item) {
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }
}
