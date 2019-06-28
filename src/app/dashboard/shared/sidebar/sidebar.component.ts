import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToFirstComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/first']);
    }else{
      this.router.navigate(['../../dashboard/first']);
    }
  }
  goTopatientTableComponent(){
    if(this.router.url == 'dashboard'){
      this.router.navigate(['../dashboard/allpat']);
    }else{
      this.router.navigate(['../../dashboard/allpat']);
    }
  }
}
