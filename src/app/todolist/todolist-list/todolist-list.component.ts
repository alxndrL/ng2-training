import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";

@Component({
    selector: 'bh-todolist-list',
    template: `
      <!-- List -->
      <ul class="todo-list">
          <bh-todolist-item  *ngFor='let item of list.items' [item]='item'></bh-todolist-item>
          
          
      </ul>
      <!-- /List-->
    `

})
export class TodolistListComponent implements OnInit {
    public list: ListService;

    constructor(list: ListService) {
      this.list = list;
    }

    ngOnInit() {
    }

}
