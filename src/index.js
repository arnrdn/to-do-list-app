// eslint-disable-next-line max-classes-per-file
import './style.css';
import check from './interactive-list.js';
import { getTasks } from './local-storage.js';

// display todo

// add todo to list

// display todos
window.addEventListener('DOMContentLoaded', () => {
  check();
  getTasks();
});
