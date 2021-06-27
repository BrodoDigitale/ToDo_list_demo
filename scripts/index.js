// класс списка с карточками
class TodoList {
    #container
    constructor(containerSelector){
      this.#container = document.querySelector(containerSelector)
    }
    addCard = (card) => {
      this.#container.append(card);
    }
  }
  
  //Класс формы
  
  class TodoForm {
    #onAddItem
    constructor(formSelector, onAddItem){
    this.#onAddItem = onAddItem; 
    document.querySelector(formSelector).addEventListener('submit', this.#submitHandler)
    }
    #submitHandler = (e) => {
      e.preventDefault();
      const data = Object.fromEntries (new FormData(e.target));
      this.#onAddItem(data);
      e.target.reset()
    }
  }
  // Класс карточки
  class TodoListItem {
    #template = document.querySelector('#todolist-item-template').content;
    #data
    #card
    #todoList
    constructor(data, todoList){
      this.#data = data;
      this.#todoList = todoList
    }
    #delete = () => {
            this.#card.remove();
    }
    #duplicate = () => {
        const card = new TodoListItem(this.#data, todoList).getCard()
        todoList.addCard(card);
    }
    #setListeners = () => {
        this.#card.querySelector('.todolist-item__del').addEventListener('click', this.#delete)
        this.#card.querySelector('.todolist-item__copy').addEventListener('click', this.#duplicate)

    }
    #createCard = () => {
      this.#card = this.#template.cloneNode(true).children[0];
      this.#card.querySelector('.todolist-item__text').textContent = this.#data.text
      this.#setListeners()
    }
    getCard = () => {
      if (!this.#card) {
        this.#createCard()
      }
      return this.#card
    }
    
  }
  
  const todoList = new TodoList('#todolist');
  const todoForm = new TodoForm('#todo-form', (data) => {
    const card = new TodoListItem(data, todoList).getCard()
    todoList.addCard(card);
  })