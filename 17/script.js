const LINK =  'https://api.github.com/users/';
const infoTemplate = document.querySelector('#info-template').innerHTML;
const wrapper = document.querySelector('#wrapper');
const input = document.querySelector('#user-input');
const inputForm = document.querySelector('#find-user-form');
inputForm.addEventListener('submit', onFindFormClick);

function onFindFormClick(e){
    e.preventDefault();
    if(!input.value){
        alert('Enter name');
    }else{
        showUserInfo();
        clearInput(input);
    }
}
function showUserInfo(){
    return(fetch(LINK + input.value)
    .then((res) => res.ok ? res : Promise.reject(res))
    .then((res) => res.json())
    .then(createUserInfo)
    .then(addUserInfo)
    .catch(() => console.error('Error 404')));
}

function createUserInfo(obj){
    return infoTemplate
        .replace('{{avatar}}', obj.avatar_url)
        .replace('{{repos}}', obj.public_repos)
        .replace('{{followers}}', obj.followers)
        .replace('{{following}}', obj.following);
}

function addUserInfo(e){
    wrapper.insertAdjacentHTML('afterbegin', e);
}

function clearInput(){
    inputForm.reset();
}
