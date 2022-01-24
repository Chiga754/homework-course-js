// ! Задание № 1
// * Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// * принимать, кроме name, название спутника (satelliteName). Переопределите метод
// * getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// * дополнительный текст 'The satellite is' + satelliteName.
// * Например:
// * var earth = new PlanetWithSatellite('earth', 'moon');
// * earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName){
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    const parentGetName = this.getName(this.name);
    this.getName = function() {
        return parentGetName + '. The satellite is ' + this.satelliteName;
    }
}

const earth = new PlanetWithSatellite('earth', 'moon');

// ! Задание № 2 Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// * Создайте наследников этого класса:
// * классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// * У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// * У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// * От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, numberOfFloors) {
    this.name = name;
    this.numberOfFloors = numberOfFloors;
    this.getNumberOfFloor = function () {
        return this.numberOfFloors;
    }
    this.setNumberOfFloor = function (num) {
        this.numberOfFloors = num;
    }
}

function House(name, numberOfFloors, numberApartmentsFloor){
    Building.apply(this, arguments);
    this.numberApartmentsFloor =  numberApartmentsFloor;
    this.getNumberOfFloor = function() {
        return {
            floor : numberOfFloors,
            TotalApartments : numberOfFloors * numberApartmentsFloor,
        }
    }
}

const house = new House('house', 5, 3);

function ShoppingCenter(name, numberOfFloors, numberStoresFloor){
    Building.apply(this, arguments);
    this.numberStoresFloor = numberStoresFloor;
    this.getNumberOfFloor = function() {
        return {
            floor : numberOfFloors,
            TotalStores : numberOfFloors * numberStoresFloor, 
        }
    }
}

const shoppingCenter = new ShoppingCenter('Walmart', 3, 20);