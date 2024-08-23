const gettaskinput = document.querySelector(".gettaskinput");
const settaskbtn = document.querySelector(".settaskbtn");
const isComplateOrNot = document.querySelector("#isComplateOrNot");
const EditableBtn = document.querySelector(".EditableBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const displaytaskbox = document.querySelector(".displaytaskbox");
const taskinputForm = document.querySelector(".taskinputForm");
const displaytaskValue = document.querySelector(".displaytaskValue");
const saveBtn = document.querySelector(".saveBtn");

const teskArr = {
  todo: [{}],
};

console.log(teskArr);

settaskbtn.addEventListener("click", (e) => {
  const taskValue = gettaskinput.value;
  e.preventDefault();
  InputTeskCheck(taskValue);
});

function InputTeskCheck(taskValue) {
  if (taskValue === "") {
    alert("plz enter tesk");
  } else {
    console.log(taskValue);
    console.log(typeof taskValue);
    addteskfunc(taskValue);
  }
}

function addteskfunc(taskValue) {
  const generateId = Date.now();

  const div = document.createElement("div");
  div.classList.add("displaytask");

  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox");
  inputCheckBox.setAttribute("id", "isComplateOrNot");
  inputCheckBox.dataset.id = generateId;

  const p1 = document.createElement("p");
  p1.classList.add("displaytaskValue");
  p1.innerText = taskValue;

  const div2 = document.createElement("div");
  div2.classList.add("taskeditOrTrash");

  const p2 = document.createElement("p");
  p2.classList.add("EditableBtn");
  p2.innerText = `✏️`;

  const p3 = document.createElement("p");
  p3.classList.add("deleteBtn");
  p3.innerText = `❌`;

  const p4 = document.createElement("p");
  p4.classList.add("saveBtn");
  p4.classList.add("hide");
  p4.innerText = `📁`;

  div2.appendChild(p2);
  div2.appendChild(p4);
  div2.appendChild(p3);

  div.appendChild(inputCheckBox);
  div.appendChild(p1);
  div.appendChild(div2);

  displaytaskbox.appendChild(div);

  const addtaskintoArr = teskArr.todo.push({
    id: generateId,
    todos: taskValue,
    isComplateOrNot: false,
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("EditableBtn")) {
    const taskElement = e.target.closest(".displaytask");
    console.log(taskElement);
    const taskId = taskElement.querySelector("#isComplateOrNot").dataset.id;
    console.log(taskId);

    EditableFunc(taskId, taskElement);
  }
});

function EditableFunc(id, taskElement) {
  const teskValueElement = taskElement.querySelector(".displaytaskValue");

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = teskValueElement.innerText;
  editInput.classList.add("editInput");

  saveBtn.classList.remove("hide");

  EditableBtn.classList.add("hide");

  taskElement.replaceChild(editInput, teskValueElement);

  saveBtn.addEventListener("click", () => {
    const newTeskValue = editInput.value;
    if (newTeskValue != "") {
      const teskupdate = tes
      kArr.todo.findIndex((task) => task.id === id);
      teskArr.todo[teskupdate].todos = newTeskValue;

      teskValueElement.innerText = newTeskValue;
      taskElement.replaceChild(teskValueElement, editInput);

      saveBtn.classList.add("hide");

      EditableBtn.classList.remove("hide");
    } else {
      alert("Task cannot be empty");
    }
  });
}

function deleteFunc() {}
