import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <button (click) = "clicked()">click</button> 
 <!-- <input type="text" (keyup.enter)="keyup($event)"> -->
 <!-- <input type="text" (keyup)="keyup($event)"> -->
 <input type = "text" [(ngModel)]="textL" name="textL">
 <h1>{{textL}}</h1>
  `
})
export class AppComponent  { 

     textL:string;
     
   keyup(event){
    console.log(event.target.value);
    }  
    
    clicked(){
      console.log(this.textL);
    }
}
