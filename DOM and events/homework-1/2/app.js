(function () {
    // ! Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
    // ? isParent(parent, child);

    // ? isParent(document.body.children[0], document.querySelector('mark'));
    // true так как первый див является родительским элементом для mark

    // ? isParent(document.querySelector('ul'), document.querySelector('mark'));
    // false так ul НЕ является родительским элементом для mark

    // * Функция принимает только DOM объекты. Обязательно проверяйте это.

    function isParent(parent, child) {
        if(!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

        let isParent = false;
        let currentParent = child.parentElement;

        while(currentParent) {
            isParent = currentParent === parent;
            if(isParent){
                break;
            }
            currentParent = currentParent.parentElement;
        }
        return isParent;
    }

    console.log(isParent(document.body.children[0], document.querySelector('mark')));
    console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));


    // ! Получить список всех ссылок, которые не находятся внутри списка ul.

    const links = [...document.links].filter(link => !link.closest('ul'));
    console.log(links);

    // ! Найти элемент, который находится перед и после списка ul.
    const ul = document.querySelector('ul');
    const prev = ul.previousElementSibling;
    const next = ul.nextElementSibling;
    console.log(prev, next);
})();