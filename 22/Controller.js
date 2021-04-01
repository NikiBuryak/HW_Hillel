const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io';
const TODOS_URL = API_URL + '/todos';   
const TASK_LIST_SELECTOR = '.todo-list'
class Controller{
  
    constructor($conteiner){
        this.$conteiner = $conteiner;
        this.$taskList = $(Controller.TASK_LIST_SELECTOR);
        this.todosCollection = new Collection(TODOS_URL);
        
        this.todosCollection.fetch().then(() =>{
        this.renderList();
        });
        this.newFormView = new NewTodoFormView({
            onSubmit: (task) => this.addTodo(task)
        })
        this.listView = new TodoListView({
            onDelete: (id) => this.deleteTodo(id),
            onToggle: (id) => this.toggleTodo(id)
        });
        this.listView.appendTo($conteiner);
        
    }
    renderList(){
        console.log(this.todosCollection.getList())
        this.listView.renderList(this.todosCollection.getList());
        this.newForm = this.newFormView.makeNewForm();
        this.$conteiner.after(this.newForm[0]);
    }
    deleteTodo(id){
        this.todosCollection.delete(id).then(() => this.listView.removeElement(id));
    }
    toggleTodo(id){ 

        this.todosCollection.toggle(id)
        .then(() => this.listView.renderElement(this.todosCollection.get(id)))
    }
    addTodo(task){
        this.todosCollection.add(task)
        .then(res => this.listView.addNewTodo(res));
    }
}