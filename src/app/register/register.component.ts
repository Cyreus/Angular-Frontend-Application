import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private alertifyService:AlertifyService,
    private authService:AuthService) { }

    registerAddForm:FormGroup;
    registerUser:Register;
    createRegisterForm()
    {
      this.registerAddForm = this.formBuilder.group(
          
        { UserName:["",Validators.required],
          Password:["",Validators.required]
          

        
        }   
            
          
      );
    }
  ngOnInit() {
    this.createRegisterForm();
  }
  register()
  {
    if(this.registerAddForm.valid)
    {
      this.registerUser = Object.assign({},this.registerAddForm.value)
      this.authService.register(this.registerUser)
      
      
    }

  }
 
}
