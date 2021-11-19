(function () {
    console.log('***Домашнее задание по функциям***');
    // ! 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply() // 0

    function multiply(){
        if(!arguments.length){
            return 0 ;
        }
        let res = 1;
        for(let i = 0; i < arguments.length; i++){
            res *= arguments[i];
        }
        return res;
    }

    console.log('Задание №1:', multiply(1,2,3), multiply());

    // ! 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

    function reverseString(string) {
        return string.split('').reverse().join('');
    }
    console.log('Задание №2:',reverseString('test'))

    // ! 3. Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText("hello") // “104 101 108 108 111”
    // ? Подсказка: в решении задачи вам помогут методы charCodeAt и trim

    function stringToCharAt(arg) {
        let str = String(arg);
        let res = '';
        for(let i = 0; i < str.length; i++){
            res += str[i].charCodeAt() + ' ';
        }
        return res.trim();
    }   
    console.log('Задание №3:',stringToCharAt(Infinity));

    // ! 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0) 
    // ? Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
    // ? Если переданно не число то верните ошибку return  new Error("Please provide a valid number"); 
    // ? Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку You win!
    // ? Eсли нет то строку You are lose, your number is 8 , the random number is  5”.  Числа в строке указаны как пример вы подставляете реальные числа.
    // ? Если переданно число в виде строки оно должно быть преобразованно к числу.

    function guessNumber(num) {
        let randomNum = Math.round(Math.random() * (11 - 1) + 1);
        if(typeof num !== "number" || isNaN(num)){
            return new Error("Please provide a valid number");
        }
        if(num > 10 || num < 1){
            return new Error('Please provide number in range 0 - 10');
        }
        if(num === randomNum){
            return 'You win';
        }else{
            return `You are lose, your number is ${num} , the random number is  ${randomNum}`;
        }
    }
    console.log('Задание №4:',guessNumber(5));
})();