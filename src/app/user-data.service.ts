import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

   users = [
    {
      id: 1,
      username: "Ravinder",
      age: 25,
      mobile: "1234567890",
      address: "123 Street",
      city: "Jaipur",
      country: "India",
    },
    {
      id: 2,
      username: "Rohit",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Mumbai",
      country: "India",
    },
    {
      id: 3,
      username: "Mahi",
      age: 25,
      mobile: "1234567890",
      address: "123 Street",
      city: "Patna",
      country: "India",
    },
    {
      id: 4,
      username: "Virat",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Delhi",
      country: "India",
    },
    {
      id: 5,
      username: "John",
      age: 25,
      mobile: "1234567890",
      address: "123 Street",
      city: "Sydney",
      country: "Australia",
    },
    {
      id: 6,
      username: "Mitchel",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Melbourne",
      country: "Australia",
    },
    {
      id: 7,
      username: "David",
      age: 25,
      mobile: "1234567890",
      address: "123 Street",
      city: "Perth",
      country: "Australia",
    },
    {
      id: 8,
      username: "Stuart",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Lords",
      country: "England",
    },
    {
      id: 9,
      username: "Jos",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Oval",
      country: "England",
    },
    {
      id: 10,
      username: "Ben",
      age: 30,
      mobile: "9876543210",
      address: "456 Street",
      city: "Brisbane",
      country: "England",
    },
  ];
}
