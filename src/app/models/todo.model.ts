import {BaseModel} from "./base-model";

export interface ITodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export class Todo extends BaseModel implements ITodo {
    userId: number;
    title: string;
    completed: boolean;

    complete() {
        this.completed = true;
    }
}
