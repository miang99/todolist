import {getData} from './store.js';
import {hideForm, displayForm, submitPro, submitTask} from './UI.js';

//set up Data
let projects = [];
let tasks = [];
projects = getData(projects);
console.table(projects);
//get html elements
const projectForm = document.getElementById('project');
const taskForm = document.getElementById('todo');
const cancelButton = document.getElementsByClassName('cancel');
//add eventListener
[...cancelButton].forEach((element) =>{
    element.addEventListener('click', (e) =>{
        element = e.target.parentNode.parentNode;
        hideForm(element);
        console.log(e);
        element.reset();
    });
});
document.getElementById('newPro').addEventListener('click', displayForm.bind(null, projectForm) );
document.getElementById('newTask').addEventListener('click', displayForm.bind(null, taskForm));
projectForm.addEventListener('submit',(e) =>{
    console.log(projects);
    e.preventDefault();
    submitPro(projects);
    e.target.reset();
    hideForm(projectForm);
});
taskForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    submitTask(tasks);
    e.target.reset();
    hideForm(taskForm);

});