import { Injectable } from '@angular/core';
import { TodoItem } from '../../components/todo-item/todo-item';

@Injectable()
export class TodoItemService {

  todos: TodoItem[] = [];

  constructor() { }

  addTodo(todo: TodoItem): TodoItemService {
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: string): TodoItemService {
    this.todos = this.todos
      .filter(todo => todo.taskId !== id);
    return this;
  }

  updateTodoById(id: string, values: TodoItem): TodoItem {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    this.todos.forEach( (todo, index) => {
      if(todo.taskId === id) {
        this.todos[index] = values;
      }
    });
    return values;
  }

  getAllTodos(): TodoItem[] {
    return this.todos;
  }

  getTodoById(id: string): TodoItem {
    return this.todos
      .filter(todo => todo.taskId === id)
      .pop();
  }

}
