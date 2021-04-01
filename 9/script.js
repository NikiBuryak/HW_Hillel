const btn = document.querySelector('#task-Btn');
const taskInput = document.querySelector('#task-Input');
let tasksList = document.querySelector('#task-List');


btn.addEventListener('click', btnClick);
function btnClick(){
    createTask(tasksList);
    clearInp();
}

function clearInp(){
taskInput.value = ' ';
}

function createTask(list){
    let newLiEl = document.createElement('li');
    newLiEl.classList.add('task-li');
    newLiEl.textContent = taskInput.value;
    addToList(list, newLiEl);
    newLiEl = null;
}
function addToList(list, el){
list.append(el);
return list;
}






