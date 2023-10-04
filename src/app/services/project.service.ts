import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Project } from '../models/project';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



constructor(private http:HttpClient) { }
  path ="https://localhost:7087/api/";

 

  getProjects():Observable<Project[]>
  {
    return this.http.get<Project[]>(this.path+"projects");
  }
  getProjectById(projectId:number):Observable<Project>{

    return this.http.get<Project>(this.path+"projects/detail/?id="+projectId);

  }
  getPhotosByProject(projectId:number):Observable<Photo[]>{

    return this.http.get<Photo[]>(this.path+"projects/photos/?projectId="+projectId);
    
  }

  add(project:Project)
  {
    let headers = new HttpHeaders();
    headers= headers.append("Content-Type","application/json");
    return this.http.post(this.path+"projects/add",project,{headers:headers}).subscribe();        
  }
}
