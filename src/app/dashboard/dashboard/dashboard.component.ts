import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareuidService } from "../shared/service/shareuid.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uid;
  constructor(private arout:ActivatedRoute,private share:ShareuidService) { }

  ngOnInit() {
    this.arout.paramMap.subscribe(r=>{
      this.uid=(r.get('uid'));
      console.log(this.uid)
      this.share.setUID(this.uid)
    })
  }

}
