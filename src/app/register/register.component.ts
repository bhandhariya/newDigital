import { Component, OnInit } from '@angular/core';
import * as swal from "sweetalert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name;email;password;rpassword;
  constructor() { }

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
      swal("Are you sure?", {
        dangerMode: true,
        buttons: true,
      });
      
      

    }else{
      
    }
  }
}
