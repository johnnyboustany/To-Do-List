import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {
  tasks: Task[];
  subscription: Subscription;
  taskService: TaskService;
  constructor(private taskServ: TaskService,
              private router: Router,
              private route: ActivatedRoute) {
    this.taskService = taskServ;
  }

  ngOnInit() {
    this.subscription = this.taskService.tasksChanged
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        }
      );
    this.tasks = this.taskService.getTasks();
  }

  onNewTask() {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  isEmpty(){
    return this.tasks.length === 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
