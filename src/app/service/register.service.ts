import { Injectable } from '@angular/core';
import { ajax } from "rxjs/ajax";
import swal from "sweetalert2";
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private auth:AngularFireAuth,private router:Router) { }

  register(u){
   console.log(u);
   this.auth.auth.createUserWithEmailAndPassword(u.email,u.password).then(()=>{
     this.auth.auth.currentUser.updateProfile({
       displayName:u.firstName
     }).then(()=>{
       var user=this.auth.auth.currentUser;
       var obj={
        name:user.displayName,
        email:user.email,
        providerId:user.providerId,
        uid:user.uid,
        emailVerified:user.emailVerified
        
       }
       
      this.http.post('https://digitalapp001.herokuapp.com/api/users/register',obj).subscribe(this.cb)
     })

     
     
   }).catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    swal.fire("Oops!", errorMessage, "error");
   })
  }
  cb=(dt)=>{
   
    if(dt.uid){
      swal.fire("Great", "User Registered Successfully", "success");
      this.router.navigate(['login'])
    }
  }
}
