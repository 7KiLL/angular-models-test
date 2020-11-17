import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'todo-models';
    public todos$ = this.todoService.getTodos();
    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {

    }

}
