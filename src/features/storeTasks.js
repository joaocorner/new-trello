//Fetch saved tasks from local storage
export async function getTasksSave(key) {
  const myTasks = localStorage.getItem(key);

  let tasksSaves = JSON.parse(myTasks) || [];

  return tasksSaves;
}

//Save tasks to local storage
export async function saveTasks(key, newTodo) {
  let tasksStored = await getTasksSave(key);
  tasksStored.push(newTodo);
  localStorage.setItem(key, JSON.stringify(tasksStored));
}

//Delete tasks from local storage
export function deletingTask(tasks, id) {
  let link = window.location.pathname;
  let myTasks = tasks.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem(link, JSON.stringify(myTasks));
  return myTasks;
}

//Updating status of tasks from local storage for useEffect
export const getLocalItmes = () => {
  let link = window.location.pathname;
  let list = localStorage.getItem(link);

  if (list) {
    return JSON.parse(localStorage.getItem(link));
  } else {
    return [];
  }
};
