"use strict";

class User {
  constructor(name, surename) {
    this.name = name;
    this.surename = surename;
  }
  get fullName() {
    return `${this.name} ${this.surename}`;
  }
  set fullName(full) {
    if (typeof(full) === "string") {
      return `${this.name} ${this.surename}`;
    } else {
      throw new TypeError("Incorrect data input");
    }
  }
}

class Student extends User {
  constructor(name, surename, year) {
    super(name, surename);
    this._year = year;     
  }

  set year(v) {
    if (typeof (v) === "number" && v > 2015) {
      this._year = v;
    }
    if (typeof v !== "number" || v < 2016) {
      throw new Error("Incorrect data input");//ПРОВЕРКА НЕ РАБОТАЕТ.ПОЧЕМУ???
    } 
  }

  get year() {
    return this._year;
  }

  getCourse() {
    let today = new Date();
    let current = today.getFullYear();
    if (current - this.year === 0) {
      return 1;
    }
    if (current - this.year > 5) {
      throw new Error("Incorrect input of year");//А ЗДЕСЬ ПРОВЕРКА РАБОТАЕТ
    } 
    else {
      return current - this.year;
    }
  }
}
const stud1 = new Student("Дмитро", "П'яточкін", 2017);
console.log(stud1.getCourse());
const stud2 = new Student("Аліна", "Кабаєва", 2021);
console.log(stud2.getCourse());
const stud3 = new Student("Пітер", "Пен", 2015);
console.log(stud3.getCourse());
