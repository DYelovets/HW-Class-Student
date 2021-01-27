"use strict";

/*Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/

const summ = (n) => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
};

//===============================================
/*2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте*/

function Student(name, surename, isMale, contacts) {
  this.name = name;
  this.surename = surename;
  this.isMale = true;
  this.contacts = contacts;
}

function Info(faculty, specific) {
  this.faculty = faculty;
  this.specific = specific;
}

const student = new Student("Lev", "Testovich", true, "8899779");
const info = new Info("economic", "finance");
const infoOfStudent = { ...student, ...info };

/*2-VARIANT
  function logInfo(obj) {
  const keys = [...Object.keys(obj)];
  const values =[...Object.values(obj)]
  for (let i=0; i<keys.length; i++) {
    console.log(`${keys[i]}: ${values[i]}`);
     }
}
logInfo(infoOfStudent); */

function logInfo(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
logInfo(infoOfStudent);

//===============================================
/*3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов  */
const someNum = [];
const evenIndex = [];
const evenElem = [];
const indexOfNullElem = [];
for (let i = 0; i < 25; i++) {
  someNum.push(Math.ceil(Math.random() * 100 - 50));

  if (i % 2 === 0) {
    evenIndex.push(someNum[i]);
  }
  if (someNum[i] % 2 === 0) {
    evenElem.push(someNum[i]);
  }
  if (someNum[i] === 0) {
    indexOfNullElem.push(i);
  }
}

console.log(`элементы с четными индексами: ${evenIndex.join()}`);
console.log(`четные элементы: ${evenElem.join()}`);
console.log(`индексы нулевых элементов: ${indexOfNullElem.join()}`);
console.log(`количество нулевых элементов: ${indexOfNullElem.length}`);

//==============================
/*Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
*/

class Book {
  constructor(author, tittle, year, production) {
    this.author = author;
    this.tittle = tittle;
    this.year = year;
    this.production = production;
  }
}

class BookOnline extends Book {
  constructor(author, tittle, year, production, format, electronNum) {
    super(author, tittle, year, production);
    this.format = format;
    this.electronNum = electronNum;
  }
}

//====================================================
/* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
 которая функция принимает в качестве параметра, с такими условиями:
 
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; */
function changeElem(n) {
  const arOfNum = [];
  return function () {
    for (let i = 0; i < 10; i++) {
      arOfNum.push(Math.round(Math.random() * n));
      //.forEach((element) => { if(element%3===0&&element%5===0){element='fizzbuzz'} })
      //- не работает.ПОЧЕМУ????
      if (arOfNum[i] % 3 === 0 && arOfNum[i] % 5 === 0) {
        arOfNum[i] = "fizzbuzz";
      }
      if (arOfNum[i] % 3 === 0) {
        arOfNum[i] = "fizz";
      }
      if (arOfNum[i] % 5 === 0) {
        arOfNum[i] = "buzz";
      }
    }
    return arOfNum;
  };
}
const res = changeElem(100);
