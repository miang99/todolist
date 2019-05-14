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
    console.log(projects);
    createProject(projects);
    setLocalStorage(projects);
    console.table(projects);
}
const submitTask =(tasks) =>{
    createTask(tasks);
    console.table(tasks);
}
export {hideForm ,displayForm, submitPro, submitTask}