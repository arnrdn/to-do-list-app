// eslint-disable-next-line max-classes-per-file
import './style.css';

// To do class
class ToDoList {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  // display todo

  static display() {
    const toDoObj = [
      {
        description: 'adopt a cat',
        completed: false,
        id: Math.random().toString(16).slice(2),
      },
      {
        description: 'bake a cake',
        completed: false,
        id: Math.random().toString(16).slice(2),
      },
    ];

    const toDos = toDoObj;

    toDos.forEach((toDo) => {
      ToDoList.addToDoToList(toDo);
    });
  }

  // add todo to list

  static addToDoToList(toDo) {
    const toDoContainer = document.querySelector('.to-do-list');

    const toDoItem = document.createElement('li');

    toDoItem.innerHTML = `<div class="to-do-item">
    <input type="checkbox" name="to-do" id="to-do">
    <textarea class="done" name="to-do-text" id="to-do-text" rows="1" maxlength="30">${toDo.description}</textarea>
    </div>
    <div class="more">
      <div class="more-dot"></div>
      <div class="more-dot"></div>
      <div class="more-dot"></div>
    </div>`;

    toDoContainer.appendChild(toDoItem);
  }
}

// display todos
document.addEventListener('DOMContentLoaded', ToDoList.display);

// make todo completed
interactiveList.complete();
