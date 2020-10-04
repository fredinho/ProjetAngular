import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Todo } from '../modele/todo';
import { TODOS } from '../mock-todos';
import { TodoService } from '../services/todo.service' 



@Component({
    selector: 'detail-todos',
    templateUrl: './detail-todo.component.html'
})
export class DetailTodoComponent implements OnInit {
  
    todos: Todo[] = null;
    todo: Todo = null;
  
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private todoService: TodoService) {}
  
    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.todoService.getTodoByID(id)
            .subscribe(todo => this.todo = todo);
        
    }

    goBack(): void {
        this.router.navigate(['/todos']);
        //window.history.back();
    }
    deleteTodo(id: number): void {
        this.todoService.deleteTodo(id)
            .subscribe(todo => this.todo = todo);
        this.router.navigate(['/todos']);
    }
  
}