import {getData} from './store';
import {displayForm} from './UI.js'

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
    const action = displayPro;
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
const addButton = () =>{
    const parent = document.querySelector('.projectDisplay');
    let child = document.createElement('div');
    child.innerHTML = '<button id="newTask">+</button>';
    const taskForm = document.getElementById('todo');
    child.addEventListener('click',displayForm.bind(null, taskForm)); 
    parent.appendChild(child);
      
}
const displayPro = (e) =>{
    const pro = projectDetail(e);
    const parent = document.querySelector('.proTitle');
    const title = `<h2>${pro.name}</h2>  `;
    const nameClass = 'proTitle';
    parent.innerHTML = '';    //reset the container
    displaylist(parent,title,pro.index, nameClass);
    addButton();
}


export {displayProject}
