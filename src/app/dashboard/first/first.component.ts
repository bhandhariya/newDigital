import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  profileForm = new FormGroup({
    doctorName: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    addmissionDate: new FormControl('',Validators.required),
    permanentAddress: new FormControl('',Validators.required),
    correspondenceAddress: new FormControl(''),
    mobileNumber: new FormControl('',Validators.required),
    landlineNumber: new FormControl(''),
    residanceNumber: new FormControl(''),
    officeNumber: new FormControl(''),
    email: new FormControl(''),
    DOB: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('',Validators.required),
    education: new FormControl(''),
    occupation: new FormControl(''),
    maritalStatus: new FormControl(''),
    basicfile: new FormControl(''),
    imageURL: new FormControl('',Validators.required),
  });
  constructor(private storage:AngularFireStorage) { }

  ngOnInit() {
  }
  save(){
    if(this.profileForm.valid){
      Swal.fire('Done you have saved this patient ')
      console.log(this.profileForm.value)
    }else{
      Swal.fire('Form not filled properlly ')
    }
  }
  uploadPhoto(event){
    const file = event.target.files[0];
    console.log(file);
    var randomString=Math.floor(Date.now() / 1000);
    const filePath = 'mentcom'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(
      finalize(() =>{ var url = fileRef.getDownloadURL()
        url.subscribe(e=>{
          console.log(e)
          this.profileForm.get('imageURL').setValue(e)
        })
      } )
   )
  .subscribe(e=>{
    
  })

  }
}
