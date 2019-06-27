import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { PatientDataService } from "../shared/service/patient-data.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private arout:ActivatedRoute,private router:Router,private http:HttpClient,
    private patient:PatientDataService) { }
  id;
  ngOnInit() {
    this.arout.paramMap.subscribe(r=>{
      this.id=r.get('id');
      console.log(this.id)
    })
  }
  familyForm=new FormGroup({
    id: new FormControl(this.id),
    fatherName : new FormControl(''),
    fatherAddress : new FormControl(''),
    fatherNumber : new FormControl(''),
    fatherEmail : new FormControl(''),
    guardianName : new FormControl(''),
    guardianAddress : new FormControl(''),
    guardianNumber : new FormControl(''),
    guardianEmail : new FormControl(''),
    spouseName : new FormControl(''),
    spouseAddress : new FormControl(''),
    spouseNumber : new FormControl(''),
    spouseEmail : new FormControl(''),
    spouseAge : new FormControl(''),
    spouseOccupation : new FormControl(''),
    relationShipStatus: new FormControl(''),
    childernsCount: new FormControl('')
  })
  save(){
    this.familyForm.get('id').setValue(this.id);
    if(this.familyForm.valid){
      this.patient.addFamilyData(this.familyForm.value);
    }else{
      Swal.fire('Form details are not valid')
    }
  }

}
