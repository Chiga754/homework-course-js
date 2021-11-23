(function () {
    console.log('***Домашнее задание по this. Контекст вызова.***');
    // ! 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
    // ? const rectangle = {width:..., height:..., getSquare:...};
    const rectangle = {
        width : 10,
        height : 15,
        getSquare() {
            return this.width * this.height;
        }
    }
    console.log('Задание №1 :',rectangle.getSquare());


    // ! 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
    
    const price = {
        price : 10,
        discount : '15%',
        getPrice() {
            return this.price;
        },
        getPriceWithDiscount() {
            const discount = parseFloat(this.discount);
            return this.price - (this.price * (discount / 100));
             
        }
    }

    console.log('Задание №2:');
    console.log(price.getPrice()); // 10
    console.log(price.getPriceWithDiscount()); // 8.5

    // ! 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
        //? object.height = 10;
        //? object.inc(); 
        //? object.height; // 11;

        const object = {
            height : 9,
            inc(){
                this.height++;
            }
        }
        object.height = 10;
        object.inc(); 
        console.log('Задание №3 :', object.height);

        // ! 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.Методы можно вызывать через точку, образуя цепочку методов:

        const numerator = {
            value: 1,

            double: function () {
                this.value *= 2;
                return this;
            },
            plusOne: function () {
                this.value += 1;
                return this;
            },
            minusOne: function () {
                this.value -= 1;
                return this;
            },
        }

        numerator.double().plusOne().plusOne().minusOne();

        console.log('Задание №4 :',numerator.value);

        // ! 5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов).

        const products = {
            retailPrice : 10,
            numberOfProduct : 100,
            getTotalСost() {
                return this.retailPrice * this.numberOfProduct;
            }
        }

        console.log('Задание №5 :', products.getTotalСost());


        // ! 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

        const spareParts = {
            retailPrice : 100,
            numberOfProduct : 20,
        }

        const totalSpareParts = products.getTotalСost.call(spareParts);
        console.log('Задание №6 :',totalSpareParts);

        // ! 7. Даны объект и функция:

        let sizes = {
            width: 5,
            height: 10
        };
        getSquare = function(){
            return this.width * this.height;
        };
        // ? Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

        console.log('Задание №7 :',getSquare.call(sizes));

        // ! 8. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
 
        let element = {
            height: 25,
            getHeight: function () {return this.height;}

        };

        let getElementHeight = element.getHeight.bind(element);

        console.log('Задание №8 :',getElementHeight());    

        
})();

