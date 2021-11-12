import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 4;

  public task = [
   {
     "name" : "Shoppping",
     "id" : 1,
     "details" : "Before 5"
   },
   {
     "name" : "Playing Games",
     "id" : 2,
     "details" : "1 hrs max"
   },
   {
     "name" : "Submit assignments",
     "id" : 3,
     "details" : "Before 12"
   },
   {
     "name" : "Have Snacks",
     "id" : 4,
     "details" : "Before 8"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
