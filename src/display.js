import {getData} from './store';


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
    console.log(e);
    const projects = getData();
    const index = Number(e.target.getAttribute('data-key'));
    console.log(index);
    const project = projects[index];
    const name = project.name;
    const note = project.note;
    const tasks = project.tasks;
    return {index, name, note, tasks}
}
const displayTask = (tasks) =>{
    
}
const displayPro = (e) =>{
    const pro = projectDetail(e);
    const parent = document.querySelector('.projectDisplay');
    const title = `<h2>${pro.name}</h2>  <button id="newTask">+</button>`;
    const index = pro.index;
    const nameClass = 'proTitle'
    parent.innerHTML = '';    //reset the container
    displaylist(parent,title,index, nameClass);
}


export {displayProject}
