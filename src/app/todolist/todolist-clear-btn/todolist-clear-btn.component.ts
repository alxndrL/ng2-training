import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-todolist-clear-btn',
  template: `
    <button class="clear-completed">Clear completed</button>
  `

})
export class TodolistClearBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
