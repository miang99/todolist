import {getData, setLocalStorage} from './store.js';
import {displayProject, displayInfo} from './display.js';

const reset = (projects, change,e) =>{
    console.table(projects);
    setLocalStorage(projects);
    displayProject(projects);
    if(change){
        displayInfo(e);
    }else{
        e.target.parentNode.innerHTML = '';
    }
}
export const deleteProject = (e) =>{
    const projects = getData();
    const index = Number(e.target.getAttribute('data-key'));
    projects.splice(index,1);
    reset(projects, false, e);
}
const getTask = (e) =>{
    const projects = getData();
    const index = Number(e.target.parentNode.parentNode.getAttribute('data-key'));
    const project = projects[index]
    const indexTask = Number(e.target.parentNode.getAttribute('data-task'));
    return {projects,project, indexTask}
}
export const deleteTask = (e) =>{  
    const info = getTask(e);
    const tasks = info.project.tasks;
    tasks.splice(info.indexTask, 1);
    reset(info.projects,true, e);
    
}
const changeState = (task) =>{
    let state = task.state;
    if(state == 'uncomplete'){
        return 'complete';
    }else  return 'uncomplete';
}
const changePriority = (task) =>{
    let priority = task.priority;
    if(priority == 'low'){
        return 'medium';    
    }else if(priority == 'medium'){
        return 'high';
    }else return 'low';
}
const changeTaskState = (e) =>{
    const info = getTask(e);
    const indexTask = info.indexTask;
    const task = info.project.tasks[indexTask];
    task.state = changeState(task);
    reset(info.projects,true, e);
}
const changeTaskPrior = (e) =>{
    const info = getTask(e);
    const indexTask = info.indexTask;
    const task = info.project.tasks[indexTask];
    task.priority = changePriority(task);
    reset(info.projects,true, e);
}
export {changeTaskPrior, changeTaskState}
