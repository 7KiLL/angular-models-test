import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITodo, Todo} from "../models/todo.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {TodoComponent} from "../components/todo/todo.component";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private todoInstances: Map<string, TodoComponent> = new Map();

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
            map(items => {
                return items.map(t => new Todo().from<Todo>(t)) as Todo[];
            })
        );
    }

    registerTodo(component: TodoComponent) {
        this.todoInstances.set(component.componentId, component);
    }

    unregisterTodo(component: TodoComponent) {
        this.todoInstances.delete(component.componentId);
    }

    play(component: TodoComponent) {
        this.todoInstances.forEach(todoComponent => {
            todoComponent.pause();
        });
        component.isPlaying = true;
    }

}
