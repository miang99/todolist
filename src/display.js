import {getData} from './store';
import {displayForm, setKeyToElement} from './UI.js';
import {taskDisplay} from './taskDisplay.js';

const displaylist = (parent,content,index, nameClass,action) =>{
    let child = document.createElement('div');
    child.innerHTML = content;
    child.className = nameClass;
    child.setAttribute('data-key',index);
    child.addEventListener('click',action);
    parent.appendChild(child);
}
const displayProject = (projects) =>{
    const parent = document.querySelector('.projectList');
    const nameClass = 'pro';
    const action = displayInfo;
    for(let i =0; i< projects.length; i++){
        const content = `${projects[i]['name']}`;
        displaylist(parent,content,i, nameClass, action);
    }
}
const projectDetail = (e) =>{
    const projects = getData();
    const index = Number(e.target.getAttribute('data-key'));
    const project = projects[index];
    const name = project.name;
    const note = project.note;
    const tasks = project.tasks;
    return {index, name, note, tasks}
}
const addButton = (index) =>{
    const parent = document.querySelector('.projectDisplay');
    let child = document.createElement('div');
    child.innerHTML = '<button id="newTask">+</button>';
    let taskForm = document.getElementById('todo');
    child.addEventListener('click',displayForm.bind(null, taskForm)); 
    parent.appendChild(child);
    setKeyToElement(taskForm, index);
      
}
const deleteButton = () =>{
    console.log('delete');
    const button = document.getElementById('newTask');
    if(button){
        button.parentNode.parentNode.removeChild(button.parentNode);
    };
}
const displayPro = (pro) =>{
    const parent = document.querySelector('.proTitle');
    const title = `<h2>${pro.name}</h2>  `;
    const nameClass = 'proTitle';
    parent.innerHTML = '';    //reset the container
    displaylist(parent,title,pro.index, nameClass);
}
const displayInfo = (e) =>{
    const pro = projectDetail(e);
    displayPro(pro);
    deleteButton();
    addButton(pro.index);
    taskDisplay(pro.tasks, pro.index);
}

export {displayProject}
