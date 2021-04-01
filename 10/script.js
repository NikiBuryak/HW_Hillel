const inpName = document.querySelector('#task-name');
const inpCode = document.querySelector('#task-code');
const inpNumb = document.querySelector('#task-number');
const inpAct = document.querySelector('#task-act');
let inputs = [inpName, inpCode, inpNumb, inpAct];

const allContacts = document.querySelector('#all-contacts');

let contTemplate = document.querySelector('#all-contacts').innerHTML;

document.querySelector('#add-btn').addEventListener('click', addContact);


function addContact (){
    if(inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value){
        addNewCont(inputs);
        clearInp();
    }
    
}

function addNewCont (inputs){
    const contact = createContact(inputs);
    console.log(contact);
    allContacts.insertAdjacentHTML('beforeend', contact);
}

function createContact(inputs) {
    return contTemplate
    .replace('Имя', inputs[0].value)
    .replace('Фамилия', inputs[1].value) 
    .replace('Код страны', inputs[2].value)
    .replace('Номер', inputs[3].value);
}
function clearInp(){
    inputs.forEach(element => {
        element.value = ' ';
    });
}
