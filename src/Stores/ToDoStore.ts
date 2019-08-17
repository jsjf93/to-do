import {observable, action} from 'mobx';

export interface ITodo {
    id: number;
    name: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export class ToDoStore {
    @observable private readonly todoList: ITodo[];

    constructor() {
        this.todoList = [
            { id: 0, name: 'To do 1', isCompleted: false, isDeleted: false }, 
            { id: 1, name: 'To do 2', isCompleted: false, isDeleted: false }
        ];
    }

    public getTodoList() {
        return this.todoList.filter(i => !i.isCompleted && !i.isDeleted);
    }

    @action
    public addTodoItem(text: string) {
        const todo: ITodo = {
            id: this.todoList[this.todoList.length-1].id + 1,
            name: text,
            isCompleted: false,
            isDeleted: false
        }
        this.todoList.push(todo);
    }

    @action
    public updateTodoItem(todo: ITodo) {
        this.todoList[todo.id].name = todo.name;
    }

    @action
    public completeTodoItem(id: number) {
        this.todoList[id].isCompleted = true;
    }

    @action
    public deleteTodoItem(id: number) {
        this.todoList[id].isDeleted = true;
    }
}