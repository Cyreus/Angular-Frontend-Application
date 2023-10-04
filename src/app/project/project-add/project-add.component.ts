import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Editor } from 'ngx-editor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
  providers:[ProjectService]
})
export class ProjectAddComponent implements OnInit {
  

  constructor(
    private projectService:ProjectService,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService,
    private authService:AuthService
    ) { }

  project:Project;
  projectAddForm:FormGroup;
  editor: Editor;
  html = '';

  createProjectForm()
  {
    this.projectAddForm = this.formBuilder.group(

      {name:["",Validators.required],
      description:["",Validators.required]}      
    )   
  }

  ngOnInit() {
    this.createProjectForm();
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  add()
  {
    if(this.projectAddForm.valid)
    {
      this.project = Object.assign({},this.projectAddForm.value);
      this.project.userId = this.authService.getCurrentUserId();
      this.projectService.add(this.project);
      this.alertifyService.success("basarıyla sehir eklendi.");
      
    }
  }

}
