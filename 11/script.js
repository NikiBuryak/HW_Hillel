const TASK_ROW_SELECTOR = '.task';
const DELETE_BTN_CLASS = 'delete-btn';
const DONE_CLASS = 'done';
const IN_PROGRESS_CLASS = 'in-progress';

const taskInput = document.querySelector('#task-input');
const taskForm = document.querySelector('#new-task-form');
const taskTemplate = document.querySelector('#task-to-do').innerHTML;
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', onTaskFormClick);
taskList.addEventListener('click', onListClick);

function onTaskFormClick(e){
    e.preventDefault();

    if(isInputValid(taskInput)){
        addTask(taskInput);
        clearForm()    
    } else{
        alert('Enter the task!')
    }
}

function isInputValid(input){
    return input.value !== '';
}

function addTask (task){
    const newTask = createTaskHTML(task);
    addTaskToList(newTask);
}

function createTaskHTML(task){
    return taskTemplate.replace('{{Task}}', task.value);
}

function addTaskToList (task){
    taskList.insertAdjacentHTML('beforeend', task);
}

function clearForm(){
    taskForm.reset();
}

function onListClick(e){
    if(e.target.classList.contains(DELETE_BTN_CLASS)){
        const li =  getTaskRow (e.target);
        deleteTask(li);
    } else {
        e.target.classList.toggle(DONE_CLASS);
    }
}

function getTaskRow(e){
    return e.closest(TASK_ROW_SELECTOR);
}

function deleteTask(e){
    e.remove();
}