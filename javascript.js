document.addEventListener("DOMContentLoaded", function () {

    // задача 1

    let age = prompt("Пожалуйста, введите ваш возраст:");
    if (age < 65) {
        alert("Вам ещё рано на пенсию");
    } else {
        alert("Поздравляем с пенсионным возрастом!");
    }

    // задача 2

    let num1 = prompt("Введите первое число");
    let num2 = prompt("Введите второе число");
    if (num1 > num2) {
        alert("Первое число больше");
    }
    else if (num2 > num1) {
        alert("Второе число больше");
    }

    else {
        alert("Числа равны");
    }

    //задача 3
    const number = 777;
    let ygadai = prompt('Угадай число', '');
    if (number == ygadai) {
        alert( 'Вы угадали!' );
    }
    else {
        alert( 'Попробуйте ещё раз!' );
    }

    // задача 4

    let login = prompt("Введите логин");
    let password = prompt("Введите пароль");

    if (login == "admin" && password == "12345") {
        alert("Добро пожаловать!");
      } else {
        alert("Неверный логин или пароль");
      }
});