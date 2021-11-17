(function () {
    // ! 1. Чему равно а, почему?

    // *  let a = 0 || 'string';  - 'string'
    // *  let a = 1 && 'string'; - 'string'
    // *  let a = null || 25; - 25
    // *  let a = null && 25; - null
    // *  let a = null || 0 || 35; - 35
    // *  let a = null && 0 && 35; - null


    //! 2. Что отобразится в консоли. Почему?
    // *   12 + 14 + '12' - '2612'

    // *   3 + 2 - '1'  - 4

    // *   '3' + 2 - 1  - 31

    // *   true + 2  - 3

    // *   +'10' + 1 - 11

    // *   undefined + 2 -  NaN

    // *   null + 5  -   5

    // *   true + undefined  - NaN



    // ! 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

    let a = 'hidden';

    if (a === 'hidden') {
        a = 'visible';
    } else {
        a = 'hidden';
    }
    console.log('Задание №3 :', a);

    // ! 4. Создать переменную и присвойте ей число.    
    // ?Используя if, записать условие:
    // ? если переменная равна нулю, присвоить ей 1;
    // ? если меньше нуля - строку “less then zero”;
    // ? если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

    let b = 10;
    if (b === 0) {
        b = 1
    } else if (b < 0) {
        b = 'less then zero';
    } else if (b > 0) {
        b *= 10;
    }



    //! 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
    //? Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
    console.log('Задание №5:')
    let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
    if (car.age > 5) {
        console.log('Need Repair');
        car.needRepair = true;
        console.log(car)
    }


    //! 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

    //? Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
    console.log("Задание №6:");
    let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

    const price = parseFloat(item.price);
    const discount = parseFloat(item.discount);
    if (!isNaN(price) && !isNaN(discount)) {
    item.priceWithDiscount = price - (price * (discount / 100));
    console.log(item.priceWithDiscount)
    } else {
    console.log(price);
    }


    //! 7. Дан следующий код:
    console.log("Задание №7:")
    let product = {
        name: "Яблоко",
        price: '10$'
    };

    let min = 10; // минимальная цена
    let max = 20; // максимальная цена

    //? Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
    let productPrice = parseFloat(product.price);
    if(productPrice >= min && productPrice <= max){
        console.log(product.name);
    }else{
        console.log('Товар не найден')
    }
})();