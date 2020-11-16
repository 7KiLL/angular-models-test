import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITodo, Todo} from "../models/todo.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
        map(items => {
            console.log('items', items);
          return items.map(t => new Todo().from<Todo>(t)) as Todo[];
        })
    );
  }
}
