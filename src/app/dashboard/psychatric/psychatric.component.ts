import { Component, OnInit } from '@angular/core';

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

}
