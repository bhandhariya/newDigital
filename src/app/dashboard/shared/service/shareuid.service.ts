import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareuidService {
  uid;
  constructor() { }
  setUID(u){
    this.uid=u;
    console.log(this.uid)
  }
  getUID(){
    return this.uid;
  }

}
