import {getData} from './store';
import {taskDisplay} from './taskDisplay.js';
import {displayPlusButton, displayDeleteButton} from './UI.js';

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
    parent.innerHTML = '';
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
const displayPro = (pro) =>{
    const parent = document.querySelector('.projectDisplay');
    const content = `<h2>${pro.name}</h2> <p><b>Note: </b>${pro.note}</p> `;
    const nameClass = 'proTitle';
    parent.innerHTML = '';    //reset the container
    displaylist(parent,content,pro.index, nameClass);
}
const displayInfo = (e) =>{
    const pro = projectDetail(e);
    displayPro(pro);
    taskDisplay(pro.tasks, pro.index);
    displayPlusButton(pro.index);
    displayDeleteButton(pro.index);    
}

export {displayProject, displayInfo}
