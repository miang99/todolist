const createTaskContainer = () =>{
    const child = document.createElement('div');
    child.className = 'info';
    document.querySelector('.projectDisplay').appendChild(child);
}
const taskTitle = (title, index) =>{
    console.log(title);
    let child = document.createElement('div');
    child.innerHTML = `<h3>${title}</h3>`;
    child.className = 'tasktitle';
    child.setAttribute('data-key', index);
    const parent = document.querySelector('.info');
    parent.appendChild(child);

}
const taskDetail = (task, index) =>{
    const parent = document.querySelector('.info');
    const child = document.createElement('div');
    child.className = 'taskDetail';
    child.setAttribute('data-key', index);
    taskInfo(child, 'Description', task.description);
    taskInfo(child, 'Due date', task.dueDate);
    taskState(child, 'Priority', task.priority);
    taskState(child, 'State', task.state);
    parent.appendChild(child);
    
}
const taskInfo = (parent,title, detail) =>{
    const child = document.createElement('div');
    child.innerHTML= `<h4>${title}: </h4> <p>${detail}</p>`;
    parent.appendChild(child);
}
const taskState = (parent, title, state) =>{
    const child = document.createElement('div');
    child.innerHTML = `<h4>${title}: </h4> <button class="${title}">${state}</button>`;
    parent.appendChild(child);
}
const taskDisplay = (tasks, index) =>{
    createTaskContainer();
    const parent = document.querySelector('.info');
    if(tasks.length > 0){
        parent.innerHTML = '';
        tasks.forEach((element) =>{
        taskTitle(element.title, index);
        taskDetail(element, index);
        });
    }else parent.innerText = 'Nothing to show. Please click the button (+) to add a new task.';
    

}
export {taskDisplay} ;
