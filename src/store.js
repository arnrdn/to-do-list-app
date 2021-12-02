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
  {
    description: 'cake a bake',
    completed: false,
    id: Math.random().toString(16).slice(2),
  },
  {
    description: 'pet your cat',
    completed: false,
    id: Math.random().toString(16).slice(2),
  },
];

function addToDoToList() {
  const toDoContainer = document.querySelector('.to-do-list');
  toDoObj.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.innerHTML = `<div class="to-do-item">
    <input type="checkbox" name="to-do" id="to-do" class="to-do">
    <textarea name="to-do-text" id="to-do-text" cols="30" rows="1" maxlength="31">${toDo.description}</textarea>
    </div>
    <div class="more">
      <div class="more-dot"></div>
      <div class="more-dot"></div>
      <div class="more-dot"></div>
    </div>`;

    toDoContainer.appendChild(toDoItem);
  });
  const checkbox = document.querySelectorAll('.to-do');
  return checkbox;
}

export { toDoObj, addToDoToList };