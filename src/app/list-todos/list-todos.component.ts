import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
  
    public id: number,
    public Description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1,'Learn FrontEndDev',false, new Date()),
  //   new Todo(2,'Learn RestAPIDev',false, new Date()),
  //   new Todo(3,'Learn BackEndDev',false, new Date())
  //   // { id: 1, Description: 'Learn FrontEnd Dev' },
  //   // { id: 2, Description: 'Learn BackEnd Dev' }
  // ]
  todos: Todo[] = [];

message:string = '';
  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }
  ngOnInit() {
    this.refreshTodos();
  } 
  refreshTodos() {
  this.todoService.retrieveAllTodos('freddie').subscribe(
    response => {
      console.log(response);
      this.todos = response;
    }
  )
}
updateTodo(id:number)
  {
    console.log(`Update ${id}`)   
    this.router.navigate(['todos',id])
  }

  deleteTodo(id:number)
  {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('freddie', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} is Successful.!`
        this.refreshTodos();
      }
    )
  }
  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
}
