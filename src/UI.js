import {createProject, createTask} from './setData.js';
import {setLocalStorage} from './store.js';
// form display
const hideForm = (element) =>{
    element.parentNode.style.display = 'none';
}
const displayForm = (element) =>{
    element.parentNode.style.display = 'block';
}
//submit buttons
const submitPro = (projects) =>{
    console.table(projects);
    createProject(projects);
    setLocalStorage(projects);
    console.table(projects);
}
const submitTask =(projects) =>{
    createTask(projects);
    console.table(projects);
    setLocalStorage(projects);
}
const setKeyToElement = (element, index) =>{
    element.setAttribute('data-key', index);
}

export {hideForm ,displayForm, submitPro, submitTask, setKeyToElement}