import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'bh-todolist-header',
  template: `
        <header class="header">
        
          <!-- Header Title-->
          <h1>{{title}}</h1>
        
          <!--Header Form-->
          <input class="new-todo" 
          #input
          [type]="type"
          placeholder="What needs to be done?" 
          (keydown.enter)="list.addItem(input.value)" 
          autofocus>
</header>
`,
  styleUrls: ['./todolist-header.component.css']
})
export class TodolistHeaderComponent implements OnInit {

    public title: string;
    public type = 'text';
    public list: ListService;

    constructor(list: ListService) {
      this.list = list;
    }

    ngOnInit() {
    }

}
