class TodoListView{
    static DELETE_BTN_SELECTOR = '.delete-btn';
    static TODO_ITEM_SELECTOR = '.todo';

    constructor(options){
        this._$el = this.initView();
        this._options = options;
    }
    initView(){
        return $('<ul class="todo-list"></ul>')
            .on(
            'click', TodoListView.DELETE_BTN_SELECTOR,
            this.onDeleteBtnClick.bind(this))
            .on('click', TodoListView.TODO_ITEM_SELECTOR,
            this.onItemClick.bind(this))
    }
    appendTo($conteiner, el =this._$el){
        return $conteiner.append(el);
    }
    renderList(list){
        const html = list.map((item) => this.generateItemHtml(item)).join('');
        this._$el.html(html);
    }
    generateItemHtml(item){
        return `<li class="todo ${item.completed ? "done" : ''}" data-id ="${item.id}">
                ${item.title}<span class="delete-btn">X</span>
                </li>`;
    }
    onDeleteBtnClick(e){
        e.stopPropagation();
        const id = this.findElement(e.target);
        this._options.onDelete(id)
    }
    onItemClick(e){
        const id = this.findElement(e.target);
        this._options.onToggle(id)
    }
    getElementId(el){
        const parent = el.closest(TodoListView.TODO_ITEM_SELECTOR);
        return parent && parent.dataset.id;
    }
    removeElement(id){
        this._$el.find(`[data-id="${id}"]`).remove();
    }
    renderElement(item){
        console.log(item);
        const itemHtml = this.generateItemHtml(item);
        this._$el.find(`[data-id="${item.id}"]`).replaceWith(itemHtml);

    }
    findElement(el){
        return this.getElementId(el)
    }
    addNewTodo(res){
        const newTodo = this.generateItemHtml(res);
        this.appendTo($(TASK_LIST_SELECTOR), newTodo);
    }
}