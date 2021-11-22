(function () {
    console.log('***Домашнее задание по функциям высшего порядка***');
    // ! 1. 1. Создать две функции и дать им осмысленные названия:
        //? - первая функция принимает массив и колбэк (одна для всех вызовов)
        //? - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
        //? Первая функция возвращает строку “New value: ” и результат обработки:
        //? firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
        //? firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
        //? firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
        //? “New value: Jhon is 45, Aaron is 20,”
        //? firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
        //? Подсказка: secondFunc должна быть представлена функцией, которая принимает
        //? один аргумент (каждый элемент массива) и возвращает результат его обработки

        // Main function 
        function firstFunc(arr, cb) {
            let res = 'New value: '
            for(let i = 0; i < arr.length; i++){
                res += cb(arr[i]);
            }
            return res;
        }

        // Callbacks
        function handler1(el) {
            return el[0].toUpperCase() + el.slice(1);
        }

        function handler2(el) {
            return ` ${el * 10},`;
        }

        function handler3(el) {
            return `${el.name} is ${el.age}, `;
        }
        function handler4(el){
            return ` ${el.split('').reverse().join('')},`;
        }

        // Result
        const result = firstFunc(['my', 'name', 'is', 'Trinity'], handler1);
        const result1 = firstFunc([10, 20, 30], handler2);
        const result2 = firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3)
        const result3 = firstFunc(['abc', '123'], handler4);

        console.log(result);
        console.log(result1);
        console.log(result2);
        console.log(result3);


        // ! 2. 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 

        let arrNumbers = [6,6,8,6,10];

        function every (arr, fn) {
            if(!Array.isArray(arr) || typeof(fn) !== 'function'){
                return 'Передайте массив и колбэк';
            }
            for(let i = 0; i < arr.length; i++){
                if(!fn(arr[i])){
                    return false
                }
            }
            return true;
        }

        const result4 = every(arrNumbers, function (el) {
            return el > 5;
        });

        console.log(result4);
})();