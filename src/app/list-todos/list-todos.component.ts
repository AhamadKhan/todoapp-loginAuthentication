import { Component, OnInit } from '@angular/core';
// Future
// - No navigation menu and footer
// - Formatting - Bootstarp
// - No security for Menus
// - Hardcoded logic in the TodoList and Login Components
// - Ramaining functionality - edit, delete, add
// - SpringBoot
// - Spring security
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
    // {id : 1, description : 'Learn to Dance'},
    // {id : 2, description : 'Become an expert in Angular'},
    // {id : 3, description : 'Visit India'},
  ];
  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
