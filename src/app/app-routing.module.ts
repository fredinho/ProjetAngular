import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoComponent } from './todo/todo.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewTacheComponent } from './new-tache/new-tache.component';
import { NewEmplComponent } from './new-empl/new-empl.component';

const routes: Routes = [
  {
    path: 'process',
    component: TodoComponent,
    data: { title: 'List of Task' }
  },
  {
    path: 'todo/add',
    component: NewTacheComponent,
    data: { title: 'new of Task' }
  },
  {
    path: 'empl/add',
    component: NewEmplComponent,
    data: { title: 'new of Empl' }
  },
  {
    path: '',
    component: EmployeeComponent,
    data: { title: 'Validation car' }
  }
];

@NgModule({
  //declarations : [EmployeeComponent],
  imports: [RouterModule.forRoot(routes), MatInputModule, MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
