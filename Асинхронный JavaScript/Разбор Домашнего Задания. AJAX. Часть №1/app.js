const apiURl = 'https://jsonplaceholder.typicode.com';
const usersListElement = document.querySelector(".users-list");
const userInfoElement = document.querySelector('.user-info');
console.log(userInfoElement);

usersListElement.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.dataset.userId){
        getUserInfoHttp(e.target.dataset.userId, onGetUserInfoCallback );
    }
})

function getUsersHTTP(cb){
    const xhr = new XMLHttpRequest();
    xhr.open('get', `${apiURl}/users`);
    xhr.addEventListener('load', () => {
        if( xhr.status !== 200){
            console.log('Error', xhr.status);
            return;
        }
        const res = JSON.parse(xhr.responseText);
        cb(res);

    })
    xhr.send();
}

function getUserInfoHttp(id, cb){
    const xhr = new XMLHttpRequest();
    xhr.open('get', `${apiURl}/users/${id}`);
    xhr.addEventListener('load', () => {
        if( xhr.status !== 200){
            console.log('Error', xhr.status);
            return;
        }
        const res = JSON.parse(xhr.responseText);
        cb(res);

    })
    xhr.send();
}

function onGetUserInfoCallback(user) {
    if(!user.id){
        console.log('User not found')
        return;
    }

    renderUserInfo(user);

}

function renderUserInfo(user){
    userInfoElement.innerHTML = '';

    const template = userInfoTemplate(user);
    userInfoElement.insertAdjacentHTML('afterbegin', template);
}

function onGetUsersCallback(users){
    if(!users.length){
        return;
    }
    renderUsersList(users);
}

function renderUsersList(users) {
    const fragment = users.reduce(
        (acc, user) => acc + userListItemTemplate(user),
        ''
        );
    usersListElement.insertAdjacentHTML('afterbegin', fragment);
}

function userListItemTemplate(user){
    return `
        <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
            ${user.name}
        </button>
    `;
}

function userInfoTemplate(user){
    return `
    <div class="card border-dark mb-3">
        <div class="card-header">${user.name}</div>
        <div class="card-body text-dark">
            <h5 class="card-title">${user.email}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
                <li class="list-group-item"><b>Website:</b> ${user.website}</li>
                <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
                <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
            </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone ${user.phone}</div>
    </div>
    `;
}

getUsersHTTP(onGetUsersCallback);