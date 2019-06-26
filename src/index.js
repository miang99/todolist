import { getData } from './store.js';
import { hideForm, displayForm, submitPro, submitTask } from './UI.js';
import { displayProject, displayInfo } from './display.js';

//set up Data
let projects = [];
projects = getData();
console.table(projects);
//get html elements
const projectForm = document.getElementById('project');
const taskForm = document.getElementById('todo');
const cancelButton = document.getElementsByClassName('cancel');

//add eventListener

window.onload = () => {
  displayProject(projects);
};
[...cancelButton].forEach(element => {
  element.addEventListener('click', e => {
    element = e.target.parentNode.parentNode;
    hideForm(element);
    element.reset();
  });
});
document
  .getElementById('newPro')
  .addEventListener('click', displayForm.bind(null, projectForm));
// document.getElementById('newTask').addEventListener('click', displayForm.bind(null, taskForm));
projectForm.addEventListener('submit', e => {
  e.preventDefault();
  submitPro(projects);
  e.target.reset();
  hideForm(projectForm);
  displayProject(projects);
});
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  submitTask(projects);
  e.target.reset();
  hideForm(taskForm);
  displayInfo(e);
});
