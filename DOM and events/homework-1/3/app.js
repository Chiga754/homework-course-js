// ! 1.Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('p');
const pContent = p.textContent;
console.log(p, pContent);

// ! 2.Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getElementInfo(element) {
    if(!(element instanceof Element)) return;
    return {
        type : element.nodeType,
        name : element.nodeName,
        amountСhild : element.children.length,
    }
}
console.log(getElementInfo(p));

// ! 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
const ul = document.querySelector("ul");
function getTextFromUl(ul){
    const [...links] = ul.querySelectorAll('a');
    return links.map(element => element.textContent);
}
console.log(getTextFromUl(ul));

// ! 4.В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// ? -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

p.childNodes.forEach(el => {
    if(el.nodeType === 3){
        el.textContent = '-text-';
    }
});
