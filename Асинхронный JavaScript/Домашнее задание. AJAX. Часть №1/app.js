// ! Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

// UI Elements
const listUsers = document.querySelector('ul');
const userInfo = document.querySelector('.list-group-flush');

renderAllUsers();

listUsers.addEventListener('click', (e) => {
    if(e.target.classList.contains('list-group-item')){
        onClickUserItem(e.target);
    }
})

function onClickUserItem(element) {
    const userName = element.textContent;
    getUsersHttp(users => {
        users.forEach(user => {
            if(user.name === userName){
                showAllUserInfo(user);
            }
        });
    });
}

function showAllUserInfo(user){
    userInfo.textContent ='';
    userInfo.insertAdjacentHTML('beforeend', `
        Id : ${user.id},<br>
        Name : ${user.name},<br>
        User Name : ${user.username},<br>
        Email : ${user.email},<br>
        Phone : ${user.phone},<br>
        Website : ${user.website},<br>
    `);
}

function renderAllUsers(){
    getUsersHttp(users => {
        const fragment = document.createDocumentFragment();
        users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('list-group-item','list-group-item-action');
            li.textContent = user.name;
            fragment.appendChild(li);
        });
        listUsers.appendChild(fragment);
    });
}

function getUsersHttp(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    })
    xhr.send();
}

