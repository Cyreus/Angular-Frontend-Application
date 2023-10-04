import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';

import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'project',component: ProjectComponent},
  {path:'projectDetail/:projectId',component:ProjectDetailComponent},
  {path:'projectadd',component:ProjectAddComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',redirectTo:'project',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
