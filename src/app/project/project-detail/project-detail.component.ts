import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Photo } from 'src/app/models/photo';



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers:[ProjectService]
})
export class ProjectDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private projectService:ProjectService) { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  photos:Photo[];
  project:Project;
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getProjectById(params["projectId"])
      this.getPhotosByProject(params["projectId"])
    });

   
  }
  getProjectById(projectId:number) {
    this.projectService.getProjectById(projectId).subscribe(data=>{
        this.project = data;
        this.getPhotosByProject(projectId);
    });
  }
  getPhotosByProject(projectId:number)
  {
    this.projectService.getPhotosByProject(projectId).subscribe(data=>{

         this.photos=data;
          this.setGallery();
    });
  }

  getImages()
  {
    const imageUrls=[];
    for(let i=0;i<this.project.photos.length;i++)
    {
      imageUrls.push({
          small:this.project.photos[i].url,
         medium:this.project.photos[i].url,
          big:this.project.photos[i].url,
      })
    }
    return imageUrls;
  }

  setGallery()
  {
      this.galleryOptions = [
        {
          width: '300px',
          height: '300px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '300px',
          height: '300px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];

      this.galleryImages = this.getImages();

  }

}
