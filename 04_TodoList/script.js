document.addEventListener("DOMContentLoaded", () => {
  const storedTask = JSON.parse(localStorage.getItem("tasks"));

  if (storedTask) {
    tasks = storedTask;
    updateTaskList();
    updateStats();
  }
});



let tasks = [];
const newTask = document.querySelector("#newTask");

const saveTask = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function addTask() {
  const TaskInputBox = document.querySelector("#TaskInputBox");
  const taskTextValue = TaskInputBox.value.trim();
  if (taskTextValue) {
    tasks.push({ todotext: taskTextValue, complate: false });
    TaskInputBox.value = "";
    updateTaskList();
    updateStats();
    saveTask();
  }
  console.log(tasks);
}

const toggleTaskComplate = (index) => {
  tasks[index].complate = !tasks[index].complate;
  console.log({ tasks });
  updateTaskList();
  updateStats();
  saveTask();
};

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
  updateStats();
  saveTask();
}

function editTask(index) {
  const taskInput = document.querySelector("#TaskInputBox");
  taskInput.value = tasks[index].todotext;

  tasks.splice(index, 1);
  updateTaskList();
  updateStats();
  saveTask();
}

function updateStats() {
  const complateTask = tasks.filter((task) => task.complate).length;

  const totalTasks = tasks.length;
  const progress = (complateTask / totalTasks) * 100;

  const progressBar = document.getElementById("progress");

  progressBar.style.width = `${progress}%`;

  document.querySelector(
    "#numbers"
  ).innerHTML = `${complateTask}/${totalTasks}`;








  if(tasks.length  && complateTask === totalTasks){
    blaskConfetti()
  } 






}

function updateTaskList() {
  const taskList = document.querySelector("#task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.complate ? "complate" : ""}" >
            <input type="checkbox" class="checkbox " ${
              task.complate ? "checked" : ""
            }/>
            <p>${task.todotext}</p>
        </div>
        <div class="icons">
            <img src="./img/edit.png" onclick="editTask(${index})"/>
            <img src="./img/bin.png" onclick="deleteTask(${index})"/>
        </div>
    </div>
    `;
    listItem.addEventListener("change", () => toggleTaskComplate(index));
    taskList.appendChild(listItem);
  });
}

newTask.addEventListener("click", (e) => {
  e.preventDefault();

  addTask();
});







const blaskConfetti = ()=>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}