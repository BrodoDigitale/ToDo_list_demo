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
        const card = new TodoListItem(this.#data, this.#todoList).getCard()
        this.#todoList.addCard(card);
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
 
  export default TodoListItem;