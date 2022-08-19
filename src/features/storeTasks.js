//Fetch saved tasks from local storage
export async function getTasksSave(key) {
  const myTasks = await localStorage.getItem(key);

  let tasksSaves = JSON.parse(myTasks) || [];

  return tasksSaves;
}

//Save tasks to local storage
export async function saveTasks(key, newTodo) {
  let tasksStored = await getTasksSave(key);

  //If there is a task with the same title, it will not be duplicated
  const hasTask = tasksStored.some((task) => task.id === newTodo.id);

  if (hasTask) {
    console.log("Task already exists");
    return;
  }

  //Add the new task to the array of tasks
  tasksStored.push(newTodo);
  await localStorage.setItem(key, JSON.stringify(tasksStored));
  console.log("Task saved");
}

//Delete tasks from local storage
export function deletingTask(tasks, id) {
  let myTasks = tasks.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@SavedTasks", JSON.stringify(myTasks));
//   console.log("Task deleted");

  return myTasks;
}
