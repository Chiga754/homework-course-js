const form = document.forms['create-user-form'];
const container = document.querySelector('.container');
const urlAPI = 'https://jsonplaceholder.typicode.com/users';

form.addEventListener('submit', onFormSubmitHandler);

function onFormSubmitHandler(event) {
    event.preventDefault();

    const inputs = [... form].filter((input) => input.classList.contains('form-control'));
    if(inputs.some(input => input.value.length === 0)){
        alert('Заполните все поля');
        return;
    };

    const userObj = createNewUserObject(inputs);
    addNewUserHTTP(userObj, createNewUserHtml);
}

function createNewUserObject(inputs) {
    return inputs.reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
    }, {});
}

function createNewUserHtml(userObj){
    if(!userObj){
        return;
    }
    const user = `
        <div class="card" style="width: 18rem; display: inline-block; margin: 5px">
            <div class="card-header">
              ${userObj.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${userObj.email}</li>
              <li class="list-group-item">${userObj.phone}</li>
              <li class="list-group-item">${userObj.website}</li>
            </ul>
        </div>
    `;
    container.insertAdjacentHTML('afterbegin', user);
}

function addNewUserHTTP(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('post', urlAPI);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.addEventListener('load', () => {
        if(xhr.status !== 201){
            showAlert();
            return;
        }
        const res = JSON.parse(xhr.response);
        cb(res);
    });
    xhr.addEventListener('error', () => {
        showAlert();
    })
    xhr.send(JSON.stringify(body));
}


function showAlert() {
    const message = document.createElement('div');
    message.innerHTML = `<div id='alert-message' style="max-width: 300px; float: right" class="alert alert-danger alert-dismissible" role="alert">Ошибка отправки</div>`;
    document.body.insertAdjacentElement('afterbegin' ,message);
    setTimeout(() => {
        document.querySelector('#alert-message').remove();
    }, 3000);
}
