import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import Todo from './models/Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(description: string) {
    this.todos.push(new Todo(Guid.create(), description))
  }
}
