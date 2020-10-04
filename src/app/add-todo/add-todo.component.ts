import { Component, OnInit } from '@angular/core';
import { Todo } from '../modele/todo';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      username: [],                   // Crée une instance de FormControl
      password: [],                   // Crée une instance de FormControl
    });
  }

  login() {
    
  }

  goBack(): void {
    this.router.navigate(['/todos']);
    //window.history.back();
}
}
