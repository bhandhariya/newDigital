import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private http:HttpClient) { }

  addFamilyData(u){
    console.log(u)
    this.http.post('http://localhost:3000/api/pat/addFamilyData',u).subscribe(this.addFamilyDataCB)
  }
  addFamilyDataCB=(dt)=>{
    console.log(dt);
    if(dt.first_name){
      Swal.fire('Personal Details Saved SuccessFully');
      
    }else{
      Swal.fire('error Occured ')
    }
  }
}
