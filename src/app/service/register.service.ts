import { Injectable } from '@angular/core';
import { ajax } from "rxjs/ajax";
import swal from "sweetalert";
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private auth:AngularFireAuth) { }

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
       
      this.http.post('http://localhost:3000/api/users/register',obj).subscribe(this.cb)
     })

     
     
   }).catch(error=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    swal("Oops!", errorMessage, "error");
   })
  }
  cb=(dt)=>{
    console.log(dt)
  }
}
