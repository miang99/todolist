import {getData, setLocalStorage} from './store.js';

export const deleteProject = (e) =>{
    const projects = getData();
    const index = Number(e.target.getAttribute('data-key'));
    projects.splice(index,1);
    console.log(projects);
    setLocalStorage(projects);
    e.target.parentNode.innerHTML = ''; 
}
const getTask = (e) =>{
    const projects = getData();
    const proIndex = e.target.getAttribute('data-key');
    const taskIndex = e.target.getAttribute('data-index');
    return {projects, proIndex, taskIndex}
}
const deleteTask = (tasks, index) =>{  
    tasks.splice(index, 1);
}
const changeState = (task) =>{
    let state = task.state;
    if(state == 'uncomplete'){
        return 'complete';
    }else 'complete';
}
const changePriority = (task) =>{
    let priority = task.priority;
    if(priority == 'low'){
        return 'medium';    
    }else if(priority == 'medium'){
        return 'high';
    }else return 'low';
}