const setLocalStorage = projects => {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    console.log('your browser does not support local storage');
  }
};
const getData = () => {
  const data = window.localStorage.getItem('projects');
  if (data) {
    return JSON.parse(data);
  } else return [];
};
export { setLocalStorage, getData };
