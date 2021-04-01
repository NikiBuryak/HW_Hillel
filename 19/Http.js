class Http{
    constructor(baseUrl){
        this._baseUrl = baseUrl;
    };

    get(){
        return fetch(this._baseUrl).then((res) => res.json())
    };

    delete(id){
        return fetch(this._baseUrl + id,{
            method: 'DELETE',
        })
    };
    post(data){
        return fetch(this._baseUrl, {
            method: 'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json', 
            }
        })
    };

    update(id, data){
        let newData = contactList.find((el) => el.id == id);
        Object.keys(data).forEach((key) => (newData[key] = data[key]));
        return(fetch(this._baseUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json', 
            },
            body: JSON.stringify(newData)
        }))
    };
}