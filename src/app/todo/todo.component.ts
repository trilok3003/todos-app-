import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;
  search;
  constructor(public authService: AuthService, public router: Router, public todoService: TodosService) { }


  ngOnInit() {
    this.getTodoList();
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate['todo'];
  }

  title: string;
  description: string;
  filter;
  getTodoList() {
    this.todoService.getTodos().subscribe(res => this.todos = res);
  }

  submit() {
    const newTodo = {
      "title": this.title,
      "description": this.description,
      "done": false,
      "ownerId": this.authService.currentUserValue['userId']
    }
    this.todoService.addTodo(newTodo).subscribe(res => {
      this.title = "";
      this.description = "";
      this.getTodoList();
    });
  }



}
