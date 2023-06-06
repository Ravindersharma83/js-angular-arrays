import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-array-practice',
  templateUrl: './array-practice.component.html',
  styleUrls: ['./array-practice.component.css']
})
export class ArrayPracticeComponent {
  jsonData : any;

  country = [
    {id:1,name:"India"},
    {id:2,name:"Australia"},
    {id:3,name:"England"},
  ];

  cities = [
    {id:1,name:"Delhi",cid:1},
    {id:2,name:"Jaipur",cid:1},
    {id:3,name:"Ujjain",cid:1},
    {id:4,name:"Sydney",cid:2},
    {id:5,name:"Melbourne",cid:2},
    {id:6,name:"Oval",cid:3},
    {id:7,name:"London",cid:3},
  ];

  cityList : any;

  constructor(private users : UserDataService) {
    this.multiplyPrices();
  }

  multiplyPrices() {
    this.jsonData = this.users.users;
    this.jsonData.forEach((item:any) => {
      item.age *= 2;
    });
  }

  getCities(id:any){
    this.cityList = this.cities.filter((item)=> item.cid == id );
  }

}
