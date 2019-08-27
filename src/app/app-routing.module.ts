import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './authentication/auth.guard';
import { ViewComponent } from './todo/view/view.component';
import { EditComponent } from './todo/edit/edit.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'todo', component: TodoComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo:'login',pathMatch: 'full'},
  {path: 'view/:id', component:ViewComponent},
  {path: 'edit/:id', component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
