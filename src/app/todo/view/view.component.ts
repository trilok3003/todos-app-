import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    id;
    viewList;
    constructor(public route: ActivatedRoute, public todoService: TodosService, public router: Router ) { 
      this.id = this.route.snapshot.params.id;
      this.getRecordsById(this.id);
    }

  ngOnInit() {
  
  }
  getRecordsById(id){
    this.todoService.viewTodo(id).subscribe(res=>{
      console.log(res);
      this.viewList = res;
    })
  }

  deleteList(){
    this.todoService.deleteTodo(this.id).subscribe(res=>{
    this.router.navigate([`/todo`]);
    })
  }
   
  }


