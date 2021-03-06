(function () {
    console.log('***Домашнее задание по стрелочным функциям***')
    // ! 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):


    //? function sum() {
    //?     const params = Array.prototype.slice.call(arguments);

    //?     if (!params.length) return 0;
    //?     return params.reduce(function (prev, next) { return prev + next; });
    //? }
        

    const sum1 = (...params) => {
        if(!params.length) return 0;
        return params.reduce((prev, next) => prev + next);
    }

    console.log('Задача №1 :',sum1(2,2));

    // что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

    // ! 2. Переделать функцию с использованием функции-стрелки

    //? function convertToObject(num) {
    //?     const obj = {
    //?         value: num,
    //?         isOdd: Boolean(num % 2)
    //?     }
    //?     return obj;
    //? }

    let convertToObject1 = num => ({value: num, isOdd: Boolean(num % 2)});

    console.log('Задача №2 :',convertToObject1(2));

})();