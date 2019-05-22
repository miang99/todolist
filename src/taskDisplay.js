import {deleteTask, changeTaskPrior, changeTaskState} from './setting.js';

const createTaskContainer = () =>{
    const child = document.createElement('div');
    child.className = 'info';
    document.querySelector('.projectDisplay').appendChild(child);
}
const taskTitle = (title, index, indexTask) =>{
    console.log(title);
    let child = document.createElement('div');
    child.innerHTML = `<h3>${title}</h3>`;
    child.className = 'tasktitle';
    addButton(child, index, indexTask);
    const parent = document.querySelector('.info');
    parent.appendChild(child);
}
const taskDetail = (task, index, indexTask) =>{
    const parent = document.querySelector('.info');
    const child = document.createElement('div');
    child.className = 'taskDetail';
    child.setAttribute('data-key', index);
    taskInfo(child, 'Description', task.description);
    taskInfo(child, 'Due date', task.dueDate);
    taskState(child, 'priority', task.priority, indexTask, index);
    taskState(child, 'state', task.state, indexTask, index);
    parent.appendChild(child);
    
}
const taskInfo = (parent,title, detail) =>{
    const child = document.createElement('div');
    child.innerHTML= `<h4>${title}: </h4> <p>${detail}</p>`;
    parent.appendChild(child);
}
const taskState = (parent, title, state, indexTask, index) =>{
    const child = document.createElement('div');
    child.innerHTML = `<h4>${title}: </h4> <button class="${title}" data-key="${index}" data-task="${indexTask}">${state}</button>`;
    parent.appendChild(child);    
}
// Button features
const addButton = (parent, index,indexTask) =>{
    const child = document.createElement('button');
    child.innerHTML = 'delete';
    child.className = 'deleteTask';
    child.setAttribute('data-key', index);
    child.setAttribute('data-task', indexTask);
    child.addEventListener('click', deleteTask);
    parent.appendChild(child);
}
const addEventToButton = (action, name) =>{
    const elements = document.getElementsByClassName(name);
    [...elements].forEach((element) =>{
        element.addEventListener('click', action);
    });
}
const taskDisplay = (tasks, index) =>{
    createTaskContainer();
    const parent = document.querySelector('.info');
    if(tasks.length > 0){
        parent.innerHTML = '';
        tasks.forEach((element) =>{
        const indexTask = tasks.indexOf(element);
        taskTitle(element.title, index, indexTask);
        taskDetail(element, index, indexTask);
        });
        addEventToButton(changeTaskPrior, 'priority');
        addEventToButton(changeTaskState, 'state');
    }else parent.innerText = 'Nothing to show. Please click the button (+) to add a new task.';
}
export {taskDisplay} ;
