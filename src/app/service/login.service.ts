import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';
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
        this.http.post('http://localhost:3000/api/users/login',obj).subscribe(this.cb)
      }
     
    })
  }
  cb=(dt)=>{
    localStorage.setItem('token',dt.token);
  }
}
