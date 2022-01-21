//ES6
// Класс Product
class Product{
    //В конструкторе создаются поля
    constructor(brand, price, discount){
        this._brand = brand;
        this.price = price;
        this.discount = discount;
    }
    // Get & Set
    get brand() {
        return this._brand;
    }
    set brand(name) {
        this._brand = name; 
    }
    // Методы
    getPriceWithDiscount(){
        return (this.price * (100 - this.discount)) / 100;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    // Статический метод. Вызыватеся как Product.plus(2,2);
    static plus(x,y){
        return x + y;
    }
}

//Экземпляр класса Product
const newProduct = new Product('Samsung', 200, 10);

//Наследование
class UserES {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// extends для наследования класса
class CustomerES extends UserES {
    constructor(firstName, lastName, membership) {
        // super для получение родительских полей
        super(firstName, lastName);
        this.membership = membership;
    }
    getFullName() {
        const parentRes = super.getFullName();
        return `${parentRes}, membership: ${this.membership}`; 
    }
}


const customerES = new CustomerES('Aleksandr', 'Chigarev', "basic");
console.log(customerES);