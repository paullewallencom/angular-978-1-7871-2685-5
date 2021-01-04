import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../Todo';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
  todos: Todo[];
   
  constructor(private _todoService: TodoService){
   
  }
  
  ngOnInit(){
    this.todos = [];
    this._todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos);
  }
  
  addTodo($event, todoText){
    if($event.which === 1){
      var result;
      var newTodo = {
        text: todoText.value,
        isCompleted: false
      };
      result = this._todoService.saveTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo)
        todoText.value='';
      });
    }
  }
  
  updateTodoText($event, todo){
    if($event.which === 13){
      todo.text = $event.target.value;
      var _todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: todo.isCompleted
      };
      
      this._todoService.updateTodo(_todo)
        .map(res => res.json())
        .subscribe(data => {
          this.setEditState(todo, false);
        });
    }
  }
  
  updateStatus(todo){
    var _todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: !todo.isCompleted
      };
      
    this._todoService.updateTodo(_todo)
        .map(res => res.json())
        .subscribe(data => {
         todo.isCompleted = !todo.isCompleted;
        });
  }
  
  deleteTodo(todo){
    var todos = this.todos;
    
    this._todoService.deleteTodo(todo._id)
      .map(res => res.json())
      .subscribe(data => {
        if(data.n == 1){
          for(var i = 0; i < todos.length; i++){
             if(todos[i]._id == todo._id){
               todos.splice(i, 1);
             }
          }
        }
      })
  }
  
  setEditState(todo, state){
    if(state){
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }
}