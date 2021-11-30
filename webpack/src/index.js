// eslint-disable-next-line max-classes-per-file
import './style.css';

// To do class
class ToDoList {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

// UI Class: handle UI Tasks

class UI {
  // display
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
      UI.addToDoToList(toDo);
    });
  }

  // add todo to list

  static addToDoToList(toDo) {
    const toDoContainer = document.querySelector('.to-do-list');

    const toDoItem = document.createElement('li');

    toDoItem.innerHTML = `<div class="to-do-item">
    <input type="checkbox" name="to-do" id="to-do">
    <label for="to-do">${toDo.description}</label>
    <div class="more">
      <div class="more-dot"></div>
      <div class="more-dot"></div>
      <div class="more-dot"></div>
    </div>
    </div>`;

    toDoContainer.appendChild(toDoItem);
  }

  // check todo as done

  // remove todo ONE

  // remove checked todos
}

// Event: Display ToDos

document.addEventListener('DOMContentLoaded', UI.display);

// Event: Add ToDos

// Store Class: local storage

// ADDIIONAL drag-and-drop items

// INTERACTIVE LIST
// ADD AND REMOVE ITEMS