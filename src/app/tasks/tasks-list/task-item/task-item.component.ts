import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../task.model';
import {TaskService} from '../../task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  taskService : TaskService;
  constructor(taskService: TaskService, private router: Router,
              private route: ActivatedRoute) {
    this.taskService = taskService
  }
  ngOnInit() {
  }

  onDelete(){
    this.taskService.deleteTask(this.index);
  }

  onUpdate(){
    this.taskService.setTaskToUpdate(this.task);
    this.taskService.setIndexToUpdate(this.index);
    this.router.navigate(['update'], {relativeTo: this.route});
  }

  getColor(){
    return this.task.priority === 'Urgent' ? 'darkorange' : 'dark-gray';
  }
}
