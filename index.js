"use strict";


class RangeValidator {
  constructor(from, to) {
   this._from=from;
   this._to=to;
  }
 
 get from(){
   return this._from;
   };
 
 set from (num){
   if(typeof(num)==='number'){
     this._from=num
   }
   throw new TypeError('Incorrect input of data!');
 }
 
 get to(){
   return this._to;
 };
 
 set to (num){
   if(typeof(num)==='number'){
   this._to=num
 }
 throw new TypeError('Incorrect input of data!');
 };
 
 get range(){
   return [this.from,this.to];
 
 };
 
 validate(num){ 
   if (num>=this.from&&num<this.to) 
   {return num;}
   else
   throw new Error(`${num} is not in range!`);
 }
 }
 
 const t=new RangeValidator(25,50);
 