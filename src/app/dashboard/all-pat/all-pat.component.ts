import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-pat',
  templateUrl: './all-pat.component.html',
  styleUrls: ['./all-pat.component.css']
})
export class AllPatComponent implements OnInit {
  
  Patient;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  this.getAllPatientDetails();
  }
  
  getAllPatientDetails(){
    this.http.get('https://digitalapp001.herokuapp.com/api/pat/getall').subscribe(this.cb)
    
  } 
  cb=(dt)=>{
    console.log(dt)
   this.Patient=dt;
   
  }

}



