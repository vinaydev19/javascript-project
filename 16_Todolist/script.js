document.addEventListener("DOMContentLoaded", () => {
  let storedTask = JSON.parse(localStorage.getItem("todos"));

  console.log("Retrieved from localStorage:", storedTask);

  if (storedTask) {
    taskArr = storedTask;
    displayTodos();
    // deletefunc();
    // editfunc();
    // checkedOrNot();
  }
});

document.getElementById("toggle-filter").addEventListener("click", function () {
  const filterBar = document.getElementById("filter-bar");
  if (filterBar.style.display === "flex") {
    filterBar.style.display = "none";
  } else {
    filterBar.style.display = "flex";
  }
});

const addTaskbtn = document.getElementById("add-task");
const category = document.getElementById("category");
const newTaskinput = document.getElementById("new-task");
const taskDate = document.getElementById("task-date");
const taskList = document.querySelector(".task-list");
const taskItem = document.querySelector(".task-item");

let taskArr = [];

addTaskbtn.addEventListener("click", () => {
  todoValidation();
  displayTodos();
});

function todoValidation() {
  let newTaskinputValue = newTaskinput.value;
  if (newTaskinputValue == "") {
    alert("pls enter task");
    return;
  }
  let categoryValue = category.value;
  if (categoryValue == "") {
    alert("pls select category");
    return;
  }
  let taskDateValue = taskDate.value;
  if (taskDateValue == "") {
    alert("pls enter Date");
    return;
  }

  const Today = new Date().setHours(0, 0, 0, 0);
  const selectDate = new Date(taskDateValue).setHours(0, 0, 0, 0);

  console.log(Today);
  console.log(selectDate);

  if (selectDate < Today) {
    alert("pls select date today or future");
    return;
  }

  taskArr.push({
    todo: newTaskinputValue,
    todoCategory: categoryValue,
    todoDate: taskDateValue,
    todoComplated: false,
  });
  console.log(taskArr);
}

function displayTodos() {
  taskList.innerHTML = "";

  taskArr.forEach((todo, index) => {
    taskList.innerHTML += `
                <div id="${index}" class="task-item">
              <div class="task-info">
                <input type="checkbox" ${
                  todo.todoCompleted ? "checked" : ""
                } data-index="${index}" class="task-complete"/>
                <div>
                  <div class="task-text">${todo.todo}</div>
                  <div class="task-category">${todo.todoCategory}</div>
                </div>
              </div>
              <div class="task-date">${todo.todoDate}</div>
              <div class="task-actions">
                <button data-index="${index}" class="edit">Edit</button>
                <button data-index="${index}" class="delete">Delete</button>
              </div>
            </div>
          `;
  });

  checkedOrNot();
  deletefunc();
  editfunc();
  saveTodos();

  //   newTaskinput.value = "";
  //   category.value = "";
  //   taskDate.value = "";
}

function checkedOrNot() {
  document.querySelectorAll(".task-complete").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const taskIndex = e.target.getAttribute("data-index");
      taskArr[taskIndex].todoComplated = e.target.checked;
      console.log(taskArr);
      saveTodos();
    });
  });
}

function deletefunc() {
  const deletebtn = document.querySelectorAll(".delete");

  deletebtn.forEach((todo) => {
    todo.addEventListener("click", (e) => {
      const taskIndex = e.target.getAttribute("data-index");
      taskArr.splice(taskIndex, 1);
      displayTodos();
      console.log(taskIndex);
      console.log(`delete`);
      console.log(taskArr);
      saveTodos();
    });
  });
}

function editfunc() {
  const editbtn = document.querySelectorAll(".edit");
  editbtn.forEach((todo) => {
    todo.addEventListener("click", (e) => {
      const taskIndex = e.target.getAttribute("data-index");
      const task = taskArr[taskIndex];

      newTaskinput.value = task.todo;
      category.value = task.todoCategory;
      taskDate.value = task.todoDate;

      taskArr.splice(taskIndex, 1);
      displayTodos();
      saveTodos();
    });
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(taskArr));
}
