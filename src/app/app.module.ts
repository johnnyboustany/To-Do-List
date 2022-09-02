import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskItemComponent } from './tasks/tasks-list/task-item/task-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksCreateComponent } from './tasks/tasks-create/tasks-create.component';
import { TasksUpdateComponent } from './tasks/tasks-update/tasks-update.component';
import { TaskService } from './tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TasksListComponent,
    TaskItemComponent,
    TasksCreateComponent,
    TasksUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
