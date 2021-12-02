import { toDoObj, addToDoToList } from './store.js';
import { addTasks, removeTasks } from './local-storage.js';

const checkbox = addToDoToList();

function check() {
  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('change', () => {
      if (checkbox[i].checked === false) {
        toDoObj[i].completed = false;
        checkbox[i].nextElementSibling.style.textDecoration = 'none';
        removeTasks(toDoObj[i].id);
      } else {
        toDoObj[i].completed = true;
        checkbox[i].nextElementSibling.style.textDecoration = 'line-through';
        addTasks(toDoObj[i]);
      }
    });
  }
}

export { check as default };
