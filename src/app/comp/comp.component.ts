import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent  {
  categories = [
    { id: 1, name: 'Rawalpindi'},
    { id: 2, name: 'Islamabad'},
    { id: 3, name: 'Karachi'},
    { id: 4, name: 'Lahore'},
    { id: 5, name: 'Quetta'}
  ]
  a: number =0;
  people = [];
   fname= "AbdulMutaal";
   lname= "Rawalpindi";
   male = "true";
  callingJson() {
    this.a++;
    var obj = {};
    obj["name"] = this.fname;
    obj["place"] = this.lname;
    obj["male"] = this.male;
    obj["id"] = this.a;
    this.people.push(obj);
    for(var i=0 ; i < this.people.length; i++)
    {
      console.log(this.people[i]); 
    } 
    }
  }