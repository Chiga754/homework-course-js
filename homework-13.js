(function () {
    // ! 1. Создайте функцию которая бы умела делать:
        // * minus(10)(6); // 4
        // * minus(5)(6); // -1
        // * minus(10)(); // 10
        // * minus()(6); // -6
        // * minus()(); // 0
    // ? Подсказка, функция minus должна возвращать другую функцию.

    function minus(num1 = 0){
        return function(num2 = 0) {
            return num1 - num2;
        }
    }
    console.log("Задание №1: ");
    console.log(minus(10)(6));
    console.log(minus(5)(6)); 
    console.log(minus(10)()); 
    console.log(minus()(6));
    console.log(minus()()); 

    // ! 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

        // * function multiplyMaker ...

        // * const multiply = multiplyMaker(2);

        // * multiply(2); // 4 (2 * 2)

        // * multiply(1); // 4 (4 * 1)

        // * multiply(3); // 12 (4 * 3)

        // * multiply(10); // 120 (12 * 10)

    console.log("Задание №2: ");
    function multiplyMaker(firstNum = 0) {
        return function(secondNum = 0) {
            return firstNum *= secondNum;
        }
    }

    const multiply = multiplyMaker(2);
    console.log(multiply(2));
    console.log(multiply(1));
    console.log(multiply(3));
    console.log(multiply(10));

    // ! 3. Реализовать модуль, который работает со строкой и имеет методы:

    // ? a. установить строку
    // ? i. если передано пустое значение, то установить пустую строку
    // ? ii. если передано число, число привести к строке

    // ? b. получить строку

    // ? c. получить длину строки

    // ? d. получить строку-перевертыш

    // * Пример:
    // * модуль.установитьСтроку(‘abcde’);
    // * модуль.получитьСтроку(); // ‘abcde’
    // * модуль.получитьДлину(); // 5

    console.log("Задание №3: ")
    const moduleStr = (function () {
        let str = '';

        function setString(value = ''){
            str = String(value);
        }
        function getString(){
            return str;
        }
        function getLengthString(){
            return str.length;
        }

        function getReversStr(){
            return str.split('').reverse().join('');
        }

        return {
            setString,
            getString,
            getLengthString,
            getReversStr,
        }

    })();

    moduleStr.setString('Hello world!')
    console.log(moduleStr.getString());
    console.log(moduleStr.getLengthString());
    console.log(moduleStr.getReversStr());


    //! 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

    //* модуль.установитьЗначение(10); // значение = 10
    //* модуль.прибавить(5); // значение += 5
    //* модуль.умножить(2); // значение *= 2
    //* модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

    //* Также можно вызывать методы цепочкой:
    //* модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
    console.log("Задание №4: ")
    const calc = (function () {
        let value = 0;

        return {
            setValue(num){
                if(!isNaN(num)){
                    value = Number(num);
                }
            },
            getValue(){
                return value;
            },
            plus(num){
                return value += num;
            },
            multiply(num) {
                return value *= num;
            },
            minus(num) {
                return value *= num;
            },
            divided(num){
                return value /= num;
            },
            exponentiation(num) {
                return value = Math.pow(value, num);
            } 
        }
    })();
    calc.setValue(100);
    calc.plus(5);
    calc.divided(2);
    calc.exponentiation(2);
    console.log(calc.getValue());

})();