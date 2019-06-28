import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-psychatric',
  templateUrl: './psychatric.component.html',
  styleUrls: ['./psychatric.component.css']
})
export class PsychatricComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }
  ChiefComplainForm=new FormGroup({
    complaintName:new FormControl(''),
    duration:new FormControl(''),
  })
  profileFormSave(){
    console.log(this.ChiefComplainForm.value)
  }
  IllnessForm=new FormGroup({
      DurationOfCurruntIllness : new FormControl(''),
      CurruntEpisodeNumber : new FormControl(''),
      ModeOfOnset : new FormControl(''),
      Course : new FormControl(''),
      PredisposingFactors : new FormControl(''),
      PrecipatingFactors : new FormControl(''),
      PrepetuatingFactors : new FormControl('')
  })
  illnessFormSave(){
    console.log(this.IllnessForm.value)
  }

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


}
