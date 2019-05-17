const setProjectInfo = () =>{
    const name = document.getElementById('name').value ;
    const note = document.getElementById('note').value;
    const tasks = [];
    return {name, note,tasks}
}
const setTaskInfo = () =>{
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const state = 'uncomplete';
    return  {title, description, dueDate, priority, state}
}
const createProject = (projects) =>{
    const newPro = setProjectInfo();
    projects.push(newPro);
}
const createTask = (projects) =>{
    const newTask = setTaskInfo();
    const index = document.getElementById('todo').getAttribute('data-key');
    const tasks = projects[index].tasks;
    tasks.push(newTask);
}

export {createProject, createTask};
