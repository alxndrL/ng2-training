import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodolistHeaderComponent } from './todolist-header/todolist-header.component';
import { TodolistMainComponent } from './todolist-main/todolist-main.component';
import { TodolistFooterComponent } from './todolist-footer/todolist-footer.component';
import { TodolistToggleComponent } from './todolist-toggle/todolist-toggle.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { TodolistItemComponent } from './todolist-item/todolist-item.component';
import { TodolistCounterComponent } from './todolist-counter/todolist-counter.component';
import { TodolistClearBtnComponent } from './todolist-clear-btn/todolist-clear-btn.component';
import {ListService} from "./list.service";

@NgModule({
    imports: [CommonModule],
    providers: [ListService],
    declarations: [TodolistComponent, TodolistHeaderComponent, TodolistMainComponent, TodolistFooterComponent, TodolistToggleComponent, TodolistListComponent, TodolistItemComponent, TodolistCounterComponent, TodolistClearBtnComponent],
    exports: [TodolistComponent]
})
export class TodolistModule { }
