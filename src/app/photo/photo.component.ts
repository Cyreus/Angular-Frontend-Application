import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService} from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photo';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
    private authService:AuthService,
    private activatedRoute:ActivatedRoute
    ) { }

   photos:Photo[];
   uploader:FileUploader;
   hasBaseDropZoneOver =false;
   baseUrl='https://localhost:7087/api/';
   currentMain:Photo;
   currentProject:any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.currentProject = params["projectId"]
    })
    this.initializeUploder();
  }

  initializeUploder()
  {
    this.uploader = new FileUploader({
      url:this.baseUrl+'projects/'+this.currentProject+'/photos',
      authToken: 'Bearer '+localStorage.getItem('token'),
      isHTML5:true,
      allowedFileType: ['image'],
      autoUpload:false,
      removeAfterUpload:true,
      maxFileSize:10*1024*1024
    });

    this.uploader.onSuccessItem= (item,response,status,headers) =>{
      if(response)
      {
        const res:Photo= JSON.parse(response);
        const photo = {
          id:res.id,
          url:res.url,
          dateAdded:res.dateAdded,
          description:res.description,
          isMain:res.isMain,
          projectId:res.projectId
        }
        this.photos.push(photo);
      }




    }
  }

}
