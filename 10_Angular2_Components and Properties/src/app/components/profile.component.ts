import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`
})
export class ProfileComponent  { 

    showDetail = true;
    person = {
       name: 'Xuhui',
       age: 26,
       friends:[
       {
       name:'Jian Shen'
       age: 26
       },
       {
       name:'Renying Jiang'
       age: 26
       },
       {
       name:'Dalong Guo',
       age: 27
       }
       ],
       avatar:'https://avatars2.githubusercontent.com/u/23388830?v=3'
    };
    constructor(){
       this.title='User Profile';
    } 
    }
