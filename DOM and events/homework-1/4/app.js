// ! 1.Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');
ul.classList.add('list');


// ! 2.Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const li = document.querySelector('ul ~ a');
li.id = 'link';


// ! 3.На li через один (начиная с самого первого) установить класс “item”
const [...links] = ul.children;
for(let i = 0; i < links.length; i++){
    if(!(i % 2)){
       links[i].classList.add('item'); 
    }
}


// ! 4.На все ссылки в примере установить класс “custom-link”
const [...allLinks] = document.links;
allLinks.forEach(el => {
    el.classList.add('custom-link');
});
