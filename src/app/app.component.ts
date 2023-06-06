import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'array-practice';
  constructor(private users : UserDataService){}

  ngOnInit(): void {
    console.log(this.users.users);
    
  }
}
