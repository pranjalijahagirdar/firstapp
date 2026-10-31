import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  skills : Array<string>= ["html", "js", "css"];
  color : Array<string>=["pink", "purple", "black"];
  animal : Array<string>=["Elephant", "Lion", "Tiger"];
  subject : Array<string>=["Math", "English", "Hindi"];
  names : Array<string>=["Reva", "Meera", "Sneha"];
  city : Array<string> = ["Pune", "Mumbai", "Dhule"];
  course : Array<string> = ["BCA", "MCA", "MCOM"];
  food : Array<string> = ["Dosa", "Pav-Bhaji", "Misal-Pav"];
  countries : Array<string> = ["India", "Japan", "Canda"];
  flowers : Array<string> = ["Rose", "Lotus", "Sunflower"];
  games : Array<string> = ["Chess", "Ludo", "Carrom"];
  vegetables : Array<string> = ["Potato", "Tomato", "Onion"];
  vehicles : Array<string> = ["Car", "Bike", "Bus"];
  birds : Array<string> = ["Parrot", "Peacock", "Sparrow"];
  programmingLanguages : Array<string> = ["JavaScript", "TypeScript", "Python"];
  hobbies : Array<string> = ["Reading", "Singing", "Dancing"];
  technologies : Array<string> = ["Angular", "React", "Node.js"];
  fruits : Array<string> = ["Apple", "Mango", "Grapes"];
  gadgets : Array<string> = ["Mobile", "Laptop", "Table"];
  clothes : Array<string> = ["Shirt", "Jeans", "Dress"];
  professions : Array<string> = ["Doctor", "Teacher", "Engineer"];
  drinks : Array<string> = ["Tea", "Coffee", "Juice"];
  seasons : Array<string> = ["Summer", "Winter", "Monsoon"];
  festivals : Array<string> = ["Diwali", "Holi", "Dasra"];
  months : Array<string> = ["January", "February", "March"];
}