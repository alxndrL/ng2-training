import { Component, OnInit } from '@angular/core';
import {ListService} from "./list.service";

@Component({
  selector: 'bh-todolist',
  template: `
    <!--App-->
    <section class="todoapp">
      <bh-todolist-header></bh-todolist-header>
      <bh-todolist-main></bh-todolist-main>
      <bh-todolist-footer></bh-todolist-footer>
    </section>
`
})
export class TodolistComponent implements OnInit {

  constructor(list: ListService) {

  }

  ngOnInit() {
  }

}
