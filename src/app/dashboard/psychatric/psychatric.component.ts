import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
