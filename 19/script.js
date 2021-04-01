const CONTACT_ROW_SELECTOR = '.new-contact';
const DELETE_BTN_SELECTOR = '.delete-btn';
const EDIT_BTN_SELECTOR = '.edit-btn';
const CONTACTS_LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';

const contactRes = new Http(CONTACTS_LIST_URL)
const $formInputs = $('#inputs');
const $contTemplate = $('#info-template').html();
const $contactForm = $('#inputs');
const $inputName = $('#task-name');
const $inputSecName = $('#task-surname');
const $inputNumber = $('#task-numb');
const $contactId= $('#task-id');
const $allContacts = $('#all-contacts');

let contactList = [];
const $contactModalForm = $('#modal-dialog').dialog({
    modal: true,
    autoOpen: false,
    maxWidth: 350,
    minHeight: 350,
    buttons:{
        Add: () => {onContactFormSubmit(), closeModalForm()},
        Close: closeModalForm,
    },
});
$allContacts
    .on('click', DELETE_BTN_SELECTOR, onContactDeleteClick)
    .on('click', EDIT_BTN_SELECTOR, onContactEditClick);
$('#open-modal-btn').on('click', onAddContBtnClick)

// On Add Btn
function onAddContBtnClick(){
    openModalForm();
}
function openModalForm(){
    $contactModalForm.dialog('open');
}
// On Submit Btn
function onContactFormSubmit (){
    let newContact = getContact();
    if(isValid(newContact)){        
        addContact(newContact)
        clearInp();
    }else{
        alert('Enter the form');   
    }
    
}
function getContact(){
    const contact = {};
    $formInputs.serializeArray().forEach((inp) => {
        contact[inp.name] = inp.value;
    });
    return contact;
}
function isValid(newContact){
    return (newContact.name !== '' && newContact.surname !== '' && newContact.code !== '' && newContact.number !== '');    
}
function addContact(contact){
    if(contact.id){
        contactRes.update(contact.id, contact)
        .then(fetchContacts);
    }else{
        addNewCont(contact)
    }
}
function addNewCont (newContact){
    createContact(newContact);

    contactRes.post(newContact)
    .then((res) =>res.json())
    .then((data) =>{
    contactList.push(data);
    renderContactList(contactList);
    })
}
function createContact(contact) {
    return $contTemplate
    .replace('{{Имя}}', contact.name)
    .replace('{{Фамилия}}', contact.surname) 
    .replace('{{Номер}}', contact.phone)
    .replace('{{id}}', contact.id);
}
function renderContactList(list){
    const html = list.map(createContact).join(' ');
    $allContacts.html(html);
}
function clearInp(){
    $contactForm[0].reset();
}
// On Close Btn
function closeModalForm(){
    $contactModalForm.dialog('close');
}

// On Delete Btn
function onContactDeleteClick(e){
    onDeleteBtnClick(e)
}
function onDeleteBtnClick(e){  
    const contact = getContRow(e.target);
    deleteContact(contact.id);
}
function getContRow(e){
    return e.closest(CONTACT_ROW_SELECTOR);
}
function deleteContact(id){
    contactList =  contactList.filter((contact) => contact.id !== id);
    contactRes.delete(id);
    renderContactList(contactList);
}

// On Edit Btn
function onContactEditClick(e){
    openModalForm();
    editEl(getContRow(e.target).id);
}
function editEl(id){
    const item = contactList.find((el) => el.id == id);
    fillForm(item);

}
function fillForm(obj){
    $inputName.val(obj.name);
    $inputSecName.val(obj.surname);
    $inputNumber.val(obj.phone);
    $contactId.val(obj.id);
}

init();
function init(){
    fetchContacts();
}
function fetchContacts(){
    contactRes.get()
        .then(setContactList)
        .then(renderContactList);
}
function setContactList(list){
    return (contactList = list);
}






