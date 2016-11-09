import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../item";
import {ListService} from "../list.service";

@Component({
  selector: 'bh-todolist-item',
  template:`
    <!-- Item -->
    <li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>{{item.title}}</label>
        <button (click)="remove(item) "class="destroy"></button>
      </div>
      <input  class="edit">
    </li>
`
})
export class TodolistItemComponent implements OnInit {

    @Input()
    public item: Item;
    private list: ListService;

    constructor(list: ListService) {
        this.list = list;
    }

    public remove (this) {
        this.list.removeItem(this);
    }

    ngOnInit() {
    }

}
