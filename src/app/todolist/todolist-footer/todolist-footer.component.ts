import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-todolist-footer',
  template: `
    <footer class="footer">
        <bh-todolist-counter></bh-todolist-counter>
        <bh-todolist-clear-btn></bh-todolist-clear-btn>          
    </footer>    
`,
  styleUrls: ['./todolist-footer.component.css']
})
export class TodolistFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
