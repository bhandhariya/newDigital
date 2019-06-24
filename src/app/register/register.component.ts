import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormControl,FormGroup,FormBuilder, Validators  } from '@angular/forms';
import { from, interval } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { HttpClient } from "@angular/common/http";
import { RegisterService } from "../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name;email;password;rpassword;
  constructor(private fb: FormBuilder,private http:HttpClient,private registerService:RegisterService) { }
   profileForm=this.fb.group({
    firstName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    rpassword:['',Validators.required]
  })
  
  ngOnInit() {
  }
  register(){
    var obj={
      name:this.name,
      email:this.email,
      password:this.password,
      rpassword:this.rpassword
    }
    console.log(obj)
    if(obj.password != obj.rpassword){
       
                             
      

    }else{
      
    }
  }
  onSubmit() {
    if(this.profileForm.valid){
      if(this.profileForm.get('password').value === this.profileForm.get('rpassword').value){
       this.registerService.register(this.profileForm.value);
       this.profileForm.reset({
         
       })
      }else{
        swal.fire("Oops!", "password does not match", "error");
      }
    }
  }


  
}
