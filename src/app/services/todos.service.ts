import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  api = "http://139.59.85.179:3000/api/todos";
  constructor(private http: HttpClient) { }

  addTodo(todo) {
   return  this.http.post(this.api,todo);
  }
  getTodos() {
    return this.http.get(this.api);
  }
  editTodo(todoId, editTodo) {
    return this.http.patch(this.api+"/"+todoId,editTodo);
  }
  viewTodo(todoId) {
    return this.http.get(this.api+"/"+todoId);
  }
  deleteTodo(todoId) {
    return this.http.delete(this.api+"/"+todoId);
  }
}
