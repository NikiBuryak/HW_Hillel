const STICKER_DELETE_SELECTOR = '.delete'; 
const STICKER_WRAP_SELECTOR = '.sticker-wrap';
const STICKERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const stickerTemp = $('#stick-template').html();
const $wrapper = $('.sticks-wrapper');
const STICKER_TEXT_AREA_SELECTOR = '.text-area';

$('.header-btn').click( onBtnClicked);
$wrapper
    .on('click', STICKER_DELETE_SELECTOR, onWrapperClick)
    .on('focusout', STICKER_TEXT_AREA_SELECTOR, onWrapperFocusOut);


let stickerList = [];


// fetch stickers
init();
function init(){
    fetchStickers()
    
}
function fetchStickers(){
    fetch(STICKERS_URL)
    .then((res) => res.json())
    .then(setList)
    .then(renderSticker)
}
function setList(res){
    return stickerList = res;
}
function renderSticker(){
    const html = stickerList.map(makeSticker)
    addStickers(html);
}
function makeSticker(stick){
    return(stickerTemp
    .replace('{{id}}',stick.id)
    .replace('{{value}}',stick.description));
    
}
function addStickers(html){
    $wrapper.html(html)
}



//  New sticker on BTN click
function onBtnClicked(){
    addSticker();
}
function addSticker(){
    const newSticker = prepearePost()
    post(newSticker);
}
function prepearePost(){
    const sticker = {
        description: " "
    }
    return sticker;
}


// Delete
function onWrapperClick(e){
    onDeleteBtnClick(e);
}
function onDeleteBtnClick(e){
    const id = findParent(e,STICKER_WRAP_SELECTOR).id;
    removeSticker(id)
}
function findParent(el, selector){
    return el.target.closest(selector)
}
function removeSticker(id){
    stickerList = stickerList.filter((sticker) => sticker.id !== id);
    deleteSticker(id)
    .then(renderSticker);
}

// Focus Out
function onWrapperFocusOut(e){
onStickerFocusOut(e);
}
function onStickerFocusOut(e){
    const text = e.target.value;
    const id = findParent(e,(STICKER_WRAP_SELECTOR)).id;
    updateSticker(id,text);
}


//Requests
function post(new_sticker){
    return fetch (STICKERS_URL,{
        method: 'POST',
        body: JSON.stringify(new_sticker),
        headers: {
            'Content-Type' : 'application/json',
        }
    }) 
    .then((res) => res.json())
    .then((res) => {
        stickerList.push(res);
        renderSticker()})
}
function deleteSticker(id){
    return(fetch (STICKERS_URL + id,{
        method: 'DELETE',
    }))
}
function updateSticker(id,value){
    const currentSticker = stickerList.find((el) => el.id == id);
    currentSticker.description = value;
    fetch(STICKERS_URL + id,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
        },body: JSON.stringify(currentSticker),
    })

}
