import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent implements OnInit {
  taskForm: FormGroup;
  defaultPriority = 'Normal';
  defaultStatus = false;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.initForm();
        }
      );
  }

  private initForm() {
    let description = '';
    let priority = '';
    let dueDate = '';
    let done = '';

    this.taskForm = new FormGroup({
      'description': new FormControl(description, Validators.required),
      'priority': new FormControl(priority, [Validators.required]),
      'dueDate': new FormControl(dueDate, Validators.required),
      'done':  new FormControl(done, Validators.required)
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    this.taskService.addTask(this.taskForm.value);
    console.log(this.taskService.getTasks());
    this.taskForm.reset();
  }

}
