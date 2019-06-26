import { Component, OnInit } from '@angular/core';
import { ShareuidService } from "../service/shareuid.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private share:ShareuidService,private auth:AngularFireAuth,private http:HttpClient) { }
  uid;username;
  ngOnInit() {
    this.uid=this.share.getUID();
    console.log(this.uid)
    this.getUserNameByUid()
   
  }
  getUserNameByUid(){
    var obj={
      id:this.uid
    }
    console.log(obj)
    this.http.post('http://localhost:3000/api/users/getDataById',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    console.log(dt)
    this.username=dt.name;
  }

}
