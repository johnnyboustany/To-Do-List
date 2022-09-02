import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Task } from './task.model';

@Injectable()
export class TaskService {
  tasksChanged = new Subject<Task[]>();
  updateMode = false;

  taskToUpdate: Task;
  indexToUpdate: number;

  private tasks: Task[] = [
    new Task(
      'Finish Economics HW',
      'Urgent',
      '2022-08-17',
      true),

    new Task(
      'Finish Math HW',
      'Normal',
     '2022-08-17',
      false),
  ];

  constructor() {}

  getTasks() {
    return this.tasks.slice();
  }

  getTask(index: number) {
    return this.tasks[index];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

  updateTask(index: number, newTask: Task) {
    this.updateMode = false;

    if (index !== null || newTask !== null){
      this.tasks[index] = newTask;
      console.log(newTask);
      this.tasksChanged.next(this.tasks.slice());
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
  }

  setTaskToUpdate(newTask: Task){
    this.updateMode = true;
   this.taskToUpdate = newTask;
  }
  getTaskToUpdate(){
    return this.taskToUpdate;
  }

  setIndexToUpdate(index: number){
    this.indexToUpdate = index;

  }
  getIndexToUpdate(){
   return this.indexToUpdate;
  }


  getUpdateMode(){
    return this.updateMode;
  }



}
