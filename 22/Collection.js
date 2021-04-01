class Collection{
    constructor(url){
        this._url = url;
        this._list = [];
    }
    fetch(){
        return fetch(this._url)
            .then(res => res.json())
            .then((res) => this.setData(res));
    }
    setData(data){
        this._list = data;
    }
    getList(){
        return this._list;
    }
    delete(id){
        fetch(this._url + `/` + id, {
            method: 'DELETE'
        });
        this._list = this._list.filter((item) => item.id !== id);
        return Promise.resolve();
    }

    toggle(id){
        const item = this.get(id);
        item.completed = !item.completed  
        fetch(this._url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        return Promise.resolve();
    }
    get(id){
        return this._list.find((item) => item.id === id);
    }

    add(value) {
        const item = {
            id: '',
            title: value,
            completed: false,
        }
        return fetch(this._url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then((res) =>{
            this._list.push(res);
            return res;
        })
         
    }
}