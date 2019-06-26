import { createProject, createTask } from './setData.js';
import { setLocalStorage } from './store.js';
import { deleteProject } from './setting.js';

// form display
const hideForm = element => {
  element.parentNode.style.display = 'none';
};
const displayForm = element => {
  element.parentNode.style.display = 'block';
};
//submit buttons
const submitPro = projects => {
  createProject(projects);
  setLocalStorage(projects);
  console.table(projects);
};
const submitTask = projects => {
  createTask(projects);
  console.table(projects);
  setLocalStorage(projects);
};
// buttons of Project
const deleteButton = button => {
  if (button) {
    button.parentNode.removeChild(button);
  }
};
const createButton = (idName, content, action, index = null) => {
  const parent = document.querySelector('.projectDisplay');
  let child = document.createElement('div');
  child.setAttribute('id', idName);
  child.innerHTML = content;
  child.addEventListener('click', action);
  parent.appendChild(child);
  if (index) {
    child.setAttribute('data-key', index);
  }
};
const displayPlusButton = index => {
  const button = document.getElementById('newTask');
  deleteButton(button);
  const action = () => {
    let taskForm = document.getElementById('todo');
    displayForm(taskForm);
    taskForm.setAttribute('data-key', index);
  };
  createButton('newTask', '+', action);
};
const displayDeleteButton = index => {
  deleteButton(document.getElementById('deletePro'));
  const content = '<h5>Delete project</h5>';
  createButton('deletePro', content, deleteProject, index);
};
const collapse = e => {
  const detail = e.target.nextElementSibling;
  if (detail.style.display == 'none') {
    detail.style.display = 'block';
  } else detail.style.display = 'none';
};

export {
  hideForm,
  displayForm,
  submitPro,
  submitTask,
  displayPlusButton,
  displayDeleteButton,
  collapse
};
