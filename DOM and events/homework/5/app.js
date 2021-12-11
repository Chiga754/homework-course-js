// ! 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

// <ul>
// 
// <li><a href="#">Link1</a></li>
// 
// ...
// 
// <li class=”new-item”>item 5</li>
// 
// <li class=”new-item”>item 6</li>
// 
// </ul>
// 
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

const ul = document.querySelector('ul');
let count = 5;
for(let i = 0; i < count; i++){
    const li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `link ${ul.childElementCount + 1}`;
    ul.appendChild(li);
}


// ! 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
const linksUl = ul.querySelectorAll('a');
linksUl.forEach(el => {
    el.insertAdjacentHTML('beforeend', ' <strong>Strong</strong>');
})

// ! 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const img = document.createElement('img');
img.src = 'https://avatars.mds.yandex.net/get-mpic/5146791/img_id1060836885667608839.jpeg/orig';
img.style.width = '150px'
img.alt = 'Мяч';
document.body.insertAdjacentElement('beforebegin', img);


// ! 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
mark.insertAdjacentHTML('beforeend', ' green');
mark.classList.add('green');

// ! 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const [...listItems] = ul.querySelectorAll('li');
listItems.sort((prev, next) => prev.textContent > next.textContent ? -1 : 1);
ul.innerHTML = '';
listItems.forEach(el => {
    ul.appendChild(el);
})

