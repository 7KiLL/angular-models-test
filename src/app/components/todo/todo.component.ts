import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input() todo: ITodo;
  public isPlaying = false;
  public componentId = this.generateId();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.registerTodo(this);
  }

  ngOnDestroy() {
    this.todoService.unregisterTodo(this);
  }

  play() {
    this.todoService.play(this);
  }

  pause() {
    this.isPlaying = false;
  }

  /**
   * Just generating unique ID for Map, to be able to remove component when destroyed
   * @private
   */
  private generateId(): string {
    return Math.random().toString(36).substring(2)
  }

}
