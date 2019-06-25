import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl,FormGroup,FormBuilder, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { LoginService } from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb: FormBuilder,private http:HttpClient,private auth:AngularFireAuth,private log:LoginService) { }
  profileForm=this.fb.group({
   
    email:['',Validators.required],
    password:['',Validators.required],
    
  })
  ngOnInit() {
   
  }

  gotoRegister(){
    this.router.navigate(['register'])
  }
  onSubmit() {
    if(this.profileForm.valid){
       this.log.login(this.profileForm.value);
      
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        type: 'error',
        title: 'fields can not be Empty'
      })
    }
  }
  facebook(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      type: 'info',
      title: 'this is in Developement'
    })
  }
}
