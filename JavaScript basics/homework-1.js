(function () {
    console.log('***Домашнее задание на числа***')
    // ! 1. Получить число pi из Math и округлить его до 2-х знаков после точки
    const PI = Number(Math.PI.toFixed(2));
    console.log('Задача №1:', PI);


    // ! 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
    const max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
    const min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
    console.log('Задача №2:');
    console.log('max:', max, 'min:', min);


    // ! 3. Работа с Math.random:
    // * a. Получить случайное число и округлить его до двух цифр после запятой
    const randomA = Number(Math.random().toFixed(2));

    // * b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
    const x = 10;
    const randomB = Math.round(Math.random() * x);

    console.log('Задача №3: ', 'a:', randomA, 'a:', randomB);


    // ! 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
    const value = Number((0.6 + 0.7).toFixed(1));
    console.log('Задача №4:', value);


    // ! 5. Получить число из строки ‘100$’
    const result = parseInt('100$');
    console.log('Задача №5:', result)
})();
