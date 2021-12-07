(function () {
    let car = {
        brand : 'audi',
        age : 10,
    }

    Object.defineProperty(car, 'brand', {
        enumerable : false,
    })

    for(let key in car){
        console.log(key)
    }
})();