class Tabset {
    static WRAPPER_CLASS = 'tabset-wrapper';
    static ELEMENTS_CLASS = 'tabset-element';
    static ELEMENTS_LIST_CLASS = 'tabset-elements';
    static TITLES_LIST_CLASS = 'tabset-titles';
    static TITLE_CLASS = 'tabset-heading';
    static TITLE_SELECTOR_CLASS = 'title';
    static BODY_CLASS = 'tabset-body';
    static BODY_SELECTOR_CLASS = 'body';
    
    static TITLE_CLASS_ACTIVE = 'tabset-heading-active';
    static ACTIVE_CLASS = 'tabset-element-active';

    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.wrapContainer();
        this.copyTitles();
        this.addEventListener();
        this.show(0);
    }

    wrapContainer() {
        this.titlesList = document.createElement('div');
        this.titlesList.className = Tabset.TITLES_LIST_CLASS;

        const wrapper = document.createElement('div');
        wrapper.className = Tabset.WRAPPER_CLASS;
        wrapper.appendChild(this.titlesList);

        this.container.parentNode.insertBefore(wrapper, this.container);
        wrapper.appendChild(this.container);

        this.container.classList.add(Tabset.ELEMENTS_LIST_CLASS);
    }

    copyTitles() {
        Array.prototype.forEach.call(this.container.children, (el) =>
            el.classList.add(Tabset.ELEMENTS_CLASS)
        );

        Array.prototype.forEach.call(
            this.container.querySelectorAll(`.${Tabset.TITLE_SELECTOR_CLASS}`),
            (el) => {
                this.titlesList.appendChild(el);
                el.classList.add(Tabset.TITLE_CLASS);
            }
        );

        Array.prototype.forEach.call(
            this.container.querySelectorAll(`.${Tabset.BODY_SELECTOR_CLASS}`),
            (el) => el.classList.add(Tabset.BODY_CLASS)
        );
    }

    addEventListener() {
        this.titlesList.addEventListener('click', (e) => this.onTitleClick(e));
    }

    onTitleClick(e) {
        if(e.target.classList.contains(Tabset.TITLE_SELECTOR_CLASS)){
            const tabIndex = this.findIndex(e.target);
            this.hideAll();
            this.show(tabIndex);
        }
    }
    findIndex(el){
        return Array.prototype.indexOf.call(this.titlesList.children, el);
    }    
    hideAll() {
        const visibleBody = this.container.querySelector('.' + Tabset.ACTIVE_CLASS);
        const visibleTitle = this.titlesList.querySelector('.' + Tabset.TITLE_CLASS_ACTIVE);
        this.hideItem(visibleBody,Tabset.ACTIVE_CLASS);
        this.hideItem(visibleTitle,Tabset.TITLE_CLASS_ACTIVE);
        
    }
    hideItem(item, itemClass){
        if(item){
            item.classList.toggle(itemClass);
        }
    }    
    show(index) {
        this.showBody(index);
        this.showTitle(index);       
    } 
    showBody(index){
        const bodyEl = this.container.children[index];
        bodyEl.classList.toggle(Tabset.ACTIVE_CLASS); 
    }
    showTitle(index){
        const title = this.titlesList.children[index];
        title.classList.toggle(Tabset.TITLE_CLASS_ACTIVE);

    } 
}
``