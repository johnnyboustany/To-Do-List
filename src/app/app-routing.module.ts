import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import {TasksCreateComponent} from './tasks/tasks-create/tasks-create.component';
import {TasksUpdateComponent} from './tasks/tasks-update/tasks-update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: TasksComponent, children: [
      { path: 'create', component: TasksCreateComponent },
      { path: 'update', component: TasksUpdateComponent },
      ]}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
