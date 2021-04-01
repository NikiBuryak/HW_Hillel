const ALBUMS_NAME_LIST_URL ='https://jsonplaceholder.typicode.com/albums';
const ALBUMS_URL_TEMPLATE = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const CHECKED_CLASS = 'checked'
const LIST_ELEM_SELECTOR = 'album'
const albumNameTemplate = document.querySelector('#album-template').innerHTML;
const albumPhotosTemplate = document.querySelector('#photos-template').innerHTML;
const albumList = document.querySelector('.album-list');
const photoList = document.querySelector('.photo-wrapper');

let albList = [];

albumList.addEventListener('click', onAlbumListClick);


init()

function init(){
    fetchAlbumList().then(pickFirstAlbEl)
}

function fetchAlbumList(){
   return(fetch(ALBUMS_NAME_LIST_URL)
        .then((res) => res.json())
        .then((res) => {
            renderList(res)
            return res}))
}

function renderList(list){
    const html = list.map(makeNameHtml).join("")
    addToHtml(albumList, html);
}

function makeNameHtml(album){
    return albumNameTemplate
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}
function addToHtml(listName, html){
    listName.insertAdjacentHTML('beforeend', html);
}

function pickFirstAlbEl(){
    albList= albumList.children;
    pickAlbName(albList[0]);
}

function pickAlbName(e){
    e.classList.toggle(CHECKED_CLASS);
    fetchPhotos(e)
}

function fetchPhotos(e){
    fetch(ALBUMS_URL_TEMPLATE + e.id)
    .then((res) => res.json())
    .then((res) =>renderPhotos(res));
}

function renderPhotos(list){
    const html = list.map(makePhotosHtml).join("");
    addPhotoToHtml(html);
}
function makePhotosHtml(e){
    return albumPhotosTemplate
    .replace('{{bigImage}}', e.url)
    .replace('{{litleImage}}', e.thumbnailUrl)
    .replace('{{title}}', e.title)
    .replace('{{id}}', e.albumId)
}

function  addPhotoToHtml(html){
    photoList.innerHTML = html;
}
function onAlbumListClick(e){
    if(e.target.classList.contains(LIST_ELEM_SELECTOR)){
        const pickedAlbum = findPicked();
        disPicked(pickedAlbum);
        pickAlbName(e.target);
    }
}

function findPicked(){
    return albumList.querySelector('.' + CHECKED_CLASS);
}

function disPicked(e){
    e.classList.toggle(CHECKED_CLASS);
}