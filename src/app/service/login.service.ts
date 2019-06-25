import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';
import swal from "sweetalert2";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AngularFireAuth,private http:HttpClient, private router:Router) { }
  login(u){
    return this.auth.auth.signInWithEmailAndPassword(u.email,u.password).then(()=>{
      var user=this.auth.auth.currentUser;
      if(user){
        var obj={
          uid:user.uid,
          email:user.email
        }
        this.http.post('https://digitalapp001.herokuapp.com/api/users/login',obj).subscribe(this.cb)
      }
     
    }).catch(function(){
      const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        type: 'error',
        title: 'Credential not match '
      })
    })
  }
  cb=(dt)=>{
    sessionStorage.setItem('Token',dt.token);
    
   
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'User login Successfully ',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['dashboard']);
  }
}