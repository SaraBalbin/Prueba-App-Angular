import { Component } from '@angular/core';
import {DataService} from './data.service'
import { Post } from './Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  users:string[] = ['juan', 'sara', 'pepe']
  posts: Post[] = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  name: string | undefined;
  age: number | undefined;

  sayHello(){
    alert('Hola')
  }

  deleteUser(user:string){
    for (let index = 0; index < this.users.length; index++) {
      if (user == this.users[index]){
        this.users.splice(index, 1);
      }
    }
  }

  addUser(newUser: any){
    let nombre = newUser.value;
    this.users.push(nombre);
    newUser.value = '';
    return false;
  }

  
}
