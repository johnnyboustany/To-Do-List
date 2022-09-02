import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-update',
  templateUrl: './tasks-update.component.html',
  styleUrls: ['./tasks-update.component.css']
})
export class TasksUpdateComponent implements OnInit {
  taskForm: FormGroup;
  taskServ: TaskService;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private router: Router) {
    this.taskServ = taskService;

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.initForm();
        }
      );
  }

  private initForm() {
    const task = this.taskService.getTaskToUpdate();
    let description = task.description;
    let priority = task.priority;
    let dueDate = task.dueDate;
    let done = task.done;

    this.taskForm = new FormGroup({
      'description': new FormControl(description, Validators.required),
      'priority': new FormControl(priority, [Validators.required]),
      'dueDate': new FormControl(dueDate, Validators.required),
      'done':  new FormControl(done, Validators.required)
    });
  }

  onCancel() {
    this.taskService.updateTask(null, null);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    const index = this.taskService.getIndexToUpdate();
    this.taskService.updateTask(index, this.taskForm.value);

    this.onCancel();
  }

}
