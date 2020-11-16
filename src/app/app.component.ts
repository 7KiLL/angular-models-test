import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";
import {tap} from "rxjs/operators";
import {Todo} from "./models/todo.model";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'todo-models';
    public todos$ = this.todoService.getTodos()
        .pipe(
            tap(todos => console.log(todos))
        );
    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {

    }

}
