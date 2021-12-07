(function () {
    // * Неглубокое копирование объекта
    let obj1 = {
        name: 'Aleksandr',
    }

    let newIObj = Object.assign({}, obj1);

    // * Глубокое копирование при помощи JSON
    let obj2 = {
        name : 'Aleksandr',
        info : {
            index : 123,
        }
    }

    let newObj2 = JSON.parse(JSON.stringify(obj2));

    // * Object keys / values

    let obj3 = {
        name : 'Aleksandr',
        age : 24,
    }

    let obj3Keys = Object.keys(obj3);
    let obj3Values = Object.values(obj3);
    let obj3Entries = Object.entries(obj3);
    let obj3FromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);
})();