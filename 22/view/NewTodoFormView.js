class NewTodoFormView{
    static FORM_BTN_SELECTOR = '#addTaskBtn';
    static FORM_SELECTOR = '#task-form';
    static FORM_INPUT_SELECTOR = '#taskNameInput';
    
    constructor(options){
        this._options = options
    }

    makeNewForm(){
        return $(`
            <form id=task-form>
            <input type="text" id="taskNameInput"/>
            <button id="addTaskBtn" class="u-full-width">Add</button>
            </form> `).on('submit', this.onSubmitBtnClick.bind(this))
    }
    onSubmitBtnClick(e){
        e.preventDefault();
        const inputValue = $(NewTodoFormView.FORM_INPUT_SELECTOR).val();
        if (this.isEmpty(inputValue)){
            console.log('Enter task')
        } else{
            this._options.onSubmit(inputValue);
            $(NewTodoFormView.FORM_SELECTOR)[0].reset()
        }
       
    }
    isEmpty(value){
        return !value
    }

}