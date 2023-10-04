import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { RegisterComponent } from './register/register.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { NgxEditorModule } from 'ngx-editor';
import { PhotoComponent } from './photo/photo.component';
import { FileUploadModule } from 'ng2-file-upload';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [							
    AppComponent,
      NavComponent,
      ProjectComponent,
      ProjectDetailComponent,
      ProjectAddComponent,
      RegisterComponent,
      HakkindaComponent,
      PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter
      },
    }),
    NgxEditorModule,
    FileUploadModule
  ],
  
  providers: [AlertifyService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
