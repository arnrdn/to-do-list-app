import { toDoObj, addToDoToList } from './store.js';
import { getTasks, addTasks, removeTasks } from './local-storage.js';

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

function checked() {
  window.addEventListener('load', () => {
    const tasksStorage = getTasks();
    toDoObj.splice(0, toDoObj.length, ...tasksStorage);
    checkbox.forEach((task) => {
      const parent = task.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentTask = tasksStorage[index].completed;
      if (currentTask) {
        task.setAttribute('checked', '');
      }
    });
  });
}



export { check, checked };
