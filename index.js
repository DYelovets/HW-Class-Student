const isAdult = function (a) {
    if (!isNaN(a)) {
      if (a >= 18) {
        console.log("Is adult");
      } else {
        console.log("Is not adult");
      } 
      return a >= 18;
    } else {
      console.log("Incorrect Input");
    }
  };

  const checkMultiplicity = function (a, b) {
    if (!isNaN(a + b)) {
    if (a % b === 0) {
      console.log("Число " + a + " кратно " + b);
    } else if (a % b !== 0) {
      console.log("Число " + a + " не кратно " + b);
    } return a%b===0;
  } else {
    console.log("Некорректный ввод");
  }
};

const isTryangle = function (a, b, c) {
    if (!isNaN(a + b + c)) {
      if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a ||
        (a === b && a === c)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Некорректный ввод");
    }
  };

function getRhombusSqr(a, h) {
  if (!isNaN(a + h)) {
    return a * h;
  } else {
    console.log("Incorrect Input");
  }
}

function getCylinderSqr(h, r) {
  if (!isNaN(h + r)) {
    const pi = 3.14159;
    return 2 * pi * r * (h + r);
  } else {
    console.log("Incorrect Input");
  }
}

function getTryangleSqr(a, h) {
  if (!isNaN(a + h)) {
    return 0.5 * a * h;
  } else {
    console.log("Incorrect Input");
  }
}

function getRectangleSqr(a, b) {
  if (!isNaN(a + b)) {
    return a * b;
  } else {
    console.log("Incorrect Input");
  }
}


let choiseOfTasc = +prompt(
  "Выберите задачу: \n1-Проверка совершеннолетия\n2-Проверка кратности числа\n3-Проверка возможности треугольника\n4-Расчёт площадей фигур"
);

if (!isNaN(choiseOfTasc)) {
  switch (choiseOfTasc) {
    case 1: {
      // Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие
      const userInput = +prompt("Введите свой возраст");
      console.log(isAdult(userInput));
      break;
    }
       // Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
    case 2: {
      const userInput1 = +prompt("Введите первое число:");
      const userInput2 = +prompt("Введите второе число:");
      console.log(checkMultiplicity(userInput1, userInput2));
      break;
    }

    // Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
    case 3: {
      const userInput1 = +prompt("Введите длину первой стороны:");
      const userInput2 = +prompt("Введите длину второй стороны:");
      const userInput3 = +prompt("Введите длину третьей стороны:");
      console.log(isTryangle(userInput1, userInput2, userInput3));
      break;
    }

    case 4: {
      let choise = +prompt(
        "Выберите задачу: \n1-Площадь ромба\n2-Площадь цилиндра\n3-Площадь треугольника\n4-Площадь прямоугольника"
      );
      if (!isNaN(choise)) {
        switch (choise) {
          case 1: {
            const userInput1 = +prompt("Введите длину стороны pомба:");
            const userInput2 = +prompt("Введите высоту ромба:");
            console.log(getRhombusSqr(userInput1, userInput2));
            break;
          }

          case 2: {
            const userInput1 = +prompt("Введите радиус цилиндра:");
            const userInput2 = +prompt("Введите высоту цилиндра:");
            console.log(getCylinderSqr(userInput1, userInput2));
            break;
          }

          case 3: {
            const userInput1 = +prompt("Введите длину основания треугольника:");
            const userInput2 = +prompt("Введите высоту треугольника:");
            console.log(getTryangleSqr(userInput1, userInput2));
            break;
          }

          case 4: {
            const userInput1 = +prompt("Введите длину прямоугольника:");
            const userInput2 = +prompt("Введите ширину прямоугольника:");
            console.log(getRectangleSqr(userInput1, userInput2));
            break;
          }
        }
      } else {
        console.log("Incorrect Input");
      }
      break;
    }
  }
} else {
  console.log("Incorrect Input");
}



