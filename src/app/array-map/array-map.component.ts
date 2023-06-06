import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-array-map',
  templateUrl: './array-map.component.html',
  styleUrls: ['./array-map.component.css']
})
export class ArrayMapComponent implements OnInit {
  user: any;
  testArray = [1,2,3,4,5,2,5];
  reduceResult : any;
  groupByCountry : any;

  constructor(private users : UserDataService){}

  ngOnInit(): void {
    this.user = this.users.users;

    // Map method()
    // Creates a new array with the results of calling a provided function on every element in the calling Array.

    this.user = this.users.users.map((userInfo) => userInfo )
    console.log('users-map-',this.user);


    // Filter method()
    // Creates a new array with all elements that pass the test implemented by the provided function

    // this.user = this.users.users.filter((item)=> item.age > 25);
    // console.log(this.user);


    // Reduce method()
    // Executes a reducer, function on each element of the array, resulting in a single outpur device
    // A Reduce function takes th following arguments.

    // - (accumulator) => The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

    // - (currentValue) => The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

    // - (currentIndex) => The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

    // - (array) => The array reduce() was called upon.

    this.reduceResult = this.testArray.reduce((a,b)=> {
      // console.log(a,b);
      return a * b;
    })
    console.log(this.reduceResult);


    //Example
    // this.user = this.users.users.reduce((accumulator, currentValue) => accumulator + currentValue.age,
    // 0,);
    // console.log('total age-',this.user);
    

    // Group users by their respective countries
    this.groupByCountry = this.users.users.reduce((users:any,item)=>{
      (users[item.country] = users[item.country] || []).push(item)
      return users;
    },{})

    console.log('Group data-- ',this.groupByCountry);

    // this.groupByCountry.India.map((item:any)=>{
    //   console.log(item);
    // })
    


    // ForEach method()
    // Executes a provided function once for each array element
    this.testArray.forEach((val)=>{
      console.log('forEach - ',val * 2);
    })
  }
}
