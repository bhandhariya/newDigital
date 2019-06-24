import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // swal({
    //   title: "Are you sure?",
    //   text: "Are you sure that you want to leave this page?",
    //   icon: "warning",
    //   dangerMode: true,
    // })
    // .then(willDelete => {
    //   if (willDelete) {
    //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
    //   }
    // });
  }

  gotoRegister(){
    this.router.navigate(['register'])
  }

}
