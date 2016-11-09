import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-todolist-counter',
  template: `
      <span class="todo-count">
      <strong>1</strong>
        item left
      </span>
    `
})
export class TodolistCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
