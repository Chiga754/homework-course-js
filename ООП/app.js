// ES5 
// Класс Product
function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function () {
        return (this.price * (100 - this.discount)) / 100;
    }
}

// Добавление метода в прототип класса
Product.prototype.getBrand = function () {
    return this.brand;
}

// Экземпляры класса Product
const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 200, 25);

console.log(apple);
console.log(samsung);

// Object.create - создаёт новый объект с указанным прототипом и свойствами.
const protoForObj = {
    sayHello() {
        return 'Hello world!';
    }
};

const obj = Object.create(protoForObj, {
    firstname: {
        value: 'Aleksandr',
    }
});

// Наследование
//User
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

User.prototype.sayHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const user = new User("Aleksandr", 'Chigarev');

// Customer функциональное наследование
function Customer(firstName, lastName, membership) {
    User.apply(this, arguments);
    this.membership = membership;
}
// Используется для прототипного наследования
Customer.prototype = Object.create(User.prototype);
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMembership = function () {
    return this.membership.toUpperCase();
}

const customer = new Customer("Ivan", 'Ivanov', 'basic');
