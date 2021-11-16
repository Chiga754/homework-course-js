(function () {
    console.log('***Домашнее задание на строки***')
    // * Дана строка: let string = "some test string";
    // ? ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

    let string = "some test string";

    // * Вопросы к этому заданию
    // ! 1. Получить первую и последнюю буквы строки
    const firstChar = string[0];
    const lastChild = string[string.length - 1];
    console.log('Задача №1:','first char:',firstChar, 'last char:' ,lastChild)


    // ! 2. Сделать первую и последнюю буквы в верхнем регистре
    const firstLastUpper = string[0].toUpperCase() +
        string.slice(1, -1) +
        string[string.length -1].toUpperCase();

    console.log('Задача №2:',firstLastUpper);


    // ! 3. Найти положение слова ‘string’ в строке
    const wordPosition = string.indexOf('string');
    console.log('Задача №3:', wordPosition);


    // ! 4. Найти положение второго пробела (“вручную” ничего не считать)
    const firstSpace = string.indexOf(' ');
    const secondSpace = string.indexOf(' ',firstSpace + 1);
    console.log('Задача №4:', secondSpace);


    // ! 5. Получить строку с 5-го символа длиной 4 буквы
    const string1 = string.substr(5, 4);
    console.log('Задача №5:', string1);


    // ! 6. Получить строку с 5-го по 9-й символы
    const string2 = string.slice(5, 9);
    console.log('Задача №6:', string2);


    // ! 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
    const string3 = string.slice(0, -6)
    console.log('Задача №7:', string3);


    // ! 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
    let a = 20;
    let b = 16;
    let string4 = a + '' + b;
    console.log(string4);
})();
