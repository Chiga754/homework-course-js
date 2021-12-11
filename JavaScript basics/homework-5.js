(function () {
    console.log('***Домашнее задание по тернарным операторам и switch case***')
    // ! 1. Записать в виде switch case следующее условие:
    //? if (a === 'block') {
    //?     console.log('block')
    //?  } else if (a === 'none') {
    //?     console.log('none')
    //?  } else if (a === 'inline') {
    //?     console.log('inline')
    //?  } else {
    //?     console.log('other')
    //?  }
    console.log('Задание №1:');
    let a = 'block';
    switch(a){
        case 'block':
        console.log('block');
        break;

        case 'none':
        console.log('none');
        break;

        case 'inline':
        console.log('inline');
        break;

        default :
        console.log('other');
    }


    // ! 2. Записать данное условие в виде тернарного оператора:

    //? let b = 'hidden';

    //? if (b === 'hidden') {

    //? b = 'visible';

    //? } else {

    //? b = 'hidden';

    //? }

    let b = 'hidden';
    b = b === 'hidden' ? 'visible' : 'hidden';
    console.log('Задание №2:',b) 


    // ! 3. Записать данное условие в виде тернарного оператора:

    // let c = 0;

    // if (c === 0) {

    // c = 1;

    // } else if (c < 0) {

    // c = 'less then zero';

    // } else {

    // c *= 10;

    // }

    let c = 0;
    c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
    console.log('Задание №3:', c); 
})();