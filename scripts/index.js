import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoListItem from './TodoListItem.js';

  const todoList = new TodoList('#todolist');
  const todoForm = new TodoForm('#todo-form', (data) => {
    const card = new TodoListItem(data, todoList).getCard()
    todoList.addCard(card);
  })