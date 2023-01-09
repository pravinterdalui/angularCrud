import { Component } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.scss']
})
export class CrudoperationComponent {

  constructor(private crudHttpService: CrudHttpService) { }

  todoList: any = [];

  ngOnInit(): void {
    this.listTodos();
  }
  listTodos() {
    this.crudHttpService.list().subscribe((response) => {
      this.todoList = response;
    }, (error => {

    }));
  }

  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: `Some Todo`
    }
    this.crudHttpService.create(todo).subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }

  editTodo(todo: any) {
    let data = {
      id: new Date().getTime(),
      title: `Some Todo`
    }
    this.crudHttpService.update(todo.id, data).subscribe((response) => {
      this.listTodos();
    }, (error => {

    }));
  }

  deleteTodo(id: any) {
    this.crudHttpService.delete(id).subscribe((response) => {
      this.listTodos();
    }, (error => {
    }));
  }

}
