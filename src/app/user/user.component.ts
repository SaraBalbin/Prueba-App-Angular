import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() nameUser: any; 
  name: string = 'Sara Balbin';
  age: number;
  address:{
    street: string,
    city: string
  };
  hobbies: string[];

  constructor(){
    this.age = 22;
    this.address = {
      street: '2212B Baker Street',
      city: 'London'
    }
    this.hobbies = ['swinning', 'read']
  }



}
