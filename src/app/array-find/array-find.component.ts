import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-array-find',
  templateUrl: './array-find.component.html',
  styleUrls: ['./array-find.component.css']
})
export class ArrayFindComponent implements OnInit {
  testArray = [1,2,3,4,5,2,5];
  user: any;
  displayData:any;
  adminArray = [
    {
      id: 11,
      username: "Admin",
      age: 21,
      mobile: "8777667897",
      address: "543 Street",
      city: "Jaipur",
      country: "India",
    },
  ];
  constructor(private users : UserDataService){}

  ngOnInit(): void {
    this.user = this.users.users;

    // find method() 
    // return the value of the first element in the array that satisfies the provided testing function, otherwise , undefined is returned.

    // find users data age is greater than 25

    this.displayData = this.users.users.find((item)=> item.age > 25)
    console.log(this.displayData); 


    // some method()
    // Tests whether at least one element in the array passes the test implemented by the provided function . It returns true if any element passes the test, otherwise it return false.

    this.displayData = this.users.users.some((item)=> item.age > 25)
    console.log(this.displayData);  // true

    
    // every method()
    // Test whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, otherwise it return true.

    this.displayData = this.users.users.every((item)=> item.age > 25)
    console.log(this.displayData); // false
    

    // sort method()
    // Sorts the elements of an array in place and return the sorted array. The default sort order is built upon converting the elements into strings, then compairing their sequences of UTF-16 code units values.

    // The compare Function
    // To sort an array of objects in JavaScript, use the sort() method with a compare function. A compare function helps us to write our logic in the sorting of the array of objects. They allow us to sort arrays of objects by strings, integers, dates, or any other custom property.

    // When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value by the compare function. Let us see, when a compare function returns a particular value :


    this.displayData = this.users.users.sort((p1,p2)=> (p1.username < p2.username) ? -1 : (p1.username > p2.username) ? 1 : 0);
    console.log(this.displayData);


    // includes method()
    // Determines whether an array includes a certain element, returning true or false as appropriate.
    this.displayData = this.testArray.includes(2)
    console.log(this.displayData);


    // slice method()
    // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified

    this.displayData = this.users.users.slice(0,5)
    console.log(this.displayData);


    // indexOf method()
    // Returns the first index at which a given element can be found in the array , or -1 if it is not present

    console.log(this.testArray.indexOf(2));


    // lastIndexOf method()
    // Returns the last index at which a given element can be found in the array , or -1 if it is not present
    console.log(this.testArray.lastIndexOf(2));



    // Reverse method()
    // Reverse the order of the elements of an array in place. The first element becomes the last, and the last element becomes the first.

    console.log(this.users.users.reverse());


    // concat method()
    // Returns a new array that includes elements from the original array and additional elements.

    console.log(this.users.users.concat(this.adminArray));


    // join method()
    // Join all elemnts of an array into a string the elements are seperated by a specified separator string

    console.log(this.testArray.join(', '));


    // toString method()
    // Returns a string representing the specified number or array and its elements

    console.log(this.testArray.toString());
    
    
    
    
    

    

  }
}
