import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';
import swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AngularFireAuth,private http:HttpClient) { }
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
     
    })
  }
  cb=(dt)=>{
    localStorage.setItem('token',dt.token);
    swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'User login Successfully ',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
