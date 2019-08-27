import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  viewList;
  todoForm: FormGroup;
  constructor(public route: ActivatedRoute, public todoService: TodosService, 
    public fb : FormBuilder,
    public router: Router ) { 
    this.id = this.route.snapshot.params.id;
    this.getRecordsById(this.id);
    this.todoForm = fb.group({
      title: ['',Validators.required],
      description: ['', Validators.required],
      done:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  getRecordsById(id){
    this.todoService.viewTodo(id).subscribe(res=>{
      if(res){
        this.viewList = res;
        this.todoForm.get('title').patchValue(res['title']);
        this.todoForm.get('description').patchValue(res['description']);
        this.todoForm.get('done').patchValue(res['done']);
      }
    })
  }

  update(){
    if(this.todoForm.invalid)
      return;
    else{
      this.todoService.editTodo(this.id,this.todoForm.value).subscribe(res=>{
        if(res)
        this.back();
      })
    }
  }

  back(){
    this.router.navigate([`/todo`]);
  }

}