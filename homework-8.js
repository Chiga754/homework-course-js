(function () {
    console.log('***Домашнее задание по методам массивов***');
    // ! 1. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n
    //* getArray(10); // [1,2,3,4,5,6,7,8,9,10]

    function getArrayOnNumber (n){
        if(typeof n !== 'number' || isNaN(n)){
            return new Error('Введите чило');
        }
        let arr = [];
        for(let i = 1; i <= n; i++){
            arr.push(i);
        }
        return arr;
    }
    console.log('Задание №1:',getArrayOnNumber(15)) ;

    // ! 2. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
    // ? doubleArray([1,2,3]) // [1,2,3,1,2,3]

    function getDoubleArray(arr){
        return arr.concat(arr);
    }

    console.log('Задание №2:',getDoubleArray([1,2,3]))

    // ! 3. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
    // ? changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
    // ? Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);

    function changeCollection() {
        if(!Array.isArray(arguments[0])) return new Error('Передайте массив');
        let resArr = [];
        for(let i = 0; i < arguments.length; i++){
            arguments[i].shift();
            resArr = resArr.concat(arguments[i]);
        }
        return resArr;
    } 
    console.log('Задание №3: ',changeCollection([1,2,3], ["a", 'b', 'c']));

    // ! 4. Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями соответсвующие указанным параметрам.
    // ? . Массив пользователей :
    const users = [
        {
          "_id": "5e36b779dc76fe3db02adc32",
          "balance": "$1,955.65",
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "name": "Berg Zimmerman",
          "gender": "male"
        },
        {
          "_id": "5e36b779d117774176f90e0b",
          "balance": "$3,776.14",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "name": "Deann Winters",
          "gender": "female"
        },
        {
          "_id": "5e36b779daf6e455ec54cf45",
          "balance": "$3,424.84",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Kari Waters",
          "gender": "female"
        }
      ]

      function filterUsers(users, key, value) {
          let resArr = [];
        if(Array.isArray(users) && key && value){
            for(let user of users){
                if(user[key] === value){
                    resArr.push(user);
                }
            }
            return resArr;
        }else{
            return new Error('Error');
        }
      }

      console.log(filterUsers(users, 'gender', "female"));
})();