import { Component } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: TodoItem[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        title: this.newTodo,
        completed: false,
        editing: false
      };
      this.todos.push(newTodoItem);
      this.newTodo = '';
    }
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  updateTodoTitle(todo: TodoItem) {
    todo.editing = false;
  }

  toggleEditMode(todo: TodoItem) {
    todo.editing = !todo.editing;
  }
}
