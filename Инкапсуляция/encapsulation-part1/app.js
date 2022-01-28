//? Инкапсуляция достигается путем областей видимости у функций и замыкания.
// function User(name){
//     let userName = name;

//     return {
//         getName() {
//             return userName; 
//         },
//         setName(name){
//             userName = name;
//         }
//     } 
// }

// const alex = new User('Aleksandr');

//? Object.freeze позволяет запретить переопределение методов или свойств.

// function User(name) {
//     let userName = name;

//     return Object.freeze({
//         getName() {
//             return userName;
//         },
//         setName(name) {
//             userName = name;
//         }
//     });
// }

// const alex = new User('Aleksandr');

//? Так же можно использовать в данном контексте Symbol.

function User(name) {
    const symbol = Symbol();

    return {
        [symbol]: name,
        getName() {
            return this[symbol];
        },
        setName(name) {
            this[symbol] = name;
        }
    }
}

const alex = new User('Aleksandr');