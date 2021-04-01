class Http{
    constructor(baseUrl){
        this._baseUrl = baseUrl;
    };

    get(addit){
        return fetch(this._baseUrl + addit).then((res) => res.json())
    };
}