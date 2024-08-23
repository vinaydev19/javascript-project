// const openpopupbox = document.querySelector("#openpopupbox");
// const AddnewNoteSection = document.querySelector(".AddnewNoteSection");
// const removePopupDisplaybtn = document.querySelector("#removePopupDisplaybtn");
// const AddNoteBtn = document.querySelector("#AddNoteBtn");

// openpopupbox.addEventListener("click", () => {
//   AddnewNoteSection.style.display = "block";
// });
// removePopupDisplaybtn.addEventListener("click", () => {
//   AddnewNoteSection.style.display = "none";
// });

// let ArrNotes = [];

// const AddNotefunc = () => {
//   const GetTitle = document.querySelector("#GetTitle").value;
//   if (GetTitle == "") {
//     alert("plz enter title");
//     return;
//   }
//   console.log(GetTitle);

//   const noteCategory = document.querySelector("#noteCategory").value;
//   console.log(noteCategory);

//   const getNote = document.querySelector("#getNote").value;
//   if (getNote == "") {
//     alert("write a note");
//     return;
//   }
//   console.log(getNote);

//   ArrNotes.push({
//     title: GetTitle,
//     note: getNote,
//     Category: noteCategory,
//   });

//   const DisplayNotes = document.querySelector(".DisplayNotes");

//   const div = document.createElement("div");
//   div.classList.add("displayNotesItems");

//   const h1 = document.createElement("p");

//   const p = document.createElement("p");

//   const div2 = document.createElement("div");
//   div2.setAttribute("class", "crudbtn");

//   const editBtn = document.querySelector("button");
//   const deteleBtn = document.querySelector("button");

//   div.appendChild(h1);
//   div.appendChild(p);
//   div2.appendChild(editBtn);
//   div2.appendChild(deteleBtn);
//   div.appendChild(div2);

//   GetTitle.value = "";
//   getNote.value = "";

//   DisplayNotes.appendChild(div);
// };

// AddNoteBtn.addEventListener("click", () => {
//   AddNotefunc();
//   console.log(ArrNotes[0].note);
// });

const openPopupBox = document.querySelector("#openpopupbox");
const addNewNoteSection = document.querySelector(".AddnewNoteSection");
const removePopupDisplayBtn = document.querySelector("#removePopupDisplaybtn");
const addNoteBtn = document.querySelector("#AddNoteBtn");

// Function to toggle visibility of the note-adding section
function toggleAddNoteSection() {
  addNewNoteSection.classList.toggle("active"); // Use class-based toggling for better performance
}

// Event listeners for opening and closing the note-adding section
openPopupBox.addEventListener("click", toggleAddNoteSection);
removePopupDisplayBtn.addEventListener("click", toggleAddNoteSection);

let arrNotes = []; // Array to store notes

// Function to add a new note
function addNewNote() {
  const getTitle = document.querySelector("#GetTitle").value.trim(); // Trim whitespace from the title
  if (getTitle === "") {
    alert("Please enter a title for your note.");
    return;
  }

  const noteCategory = document.querySelector("#noteCategory").value;
  const getNote = document.querySelector("#getNote").value.trim(); // Trim whitespace from the note content
  if (getNote === "") {
    alert("Please write something in your note.");
    return;
  }

  arrNotes.push({
    title: getTitle,
    note: getNote,
    category: noteCategory, // Use lowercase 'category' for consistency
  });

  // Function to display the added note (can be called from addNewNote or elsewhere)
  function displayAddedNote() {
    const displayNotes = document.querySelector(".DisplayNotes");

    const noteItem = document.createElement("div");
    noteItem.classList.add("displayNotesItems");

    const titleElement = document.createElement("h2"); // Use h2 for a clearer title styling
    titleElement.textContent = getTitle;
    noteItem.appendChild(titleElement);

    const noteContent = document.createElement("p");
    noteContent.textContent = getNote;
    noteItem.appendChild(noteContent);

    // Add category display if desired (adjust element types and content as needed)
    const categoryElement = document.createElement("span");
    categoryElement.classList.add("category-label"); // Add class for styling
    categoryElement.textContent = `Category: ${noteCategory}`; // Display category label
    noteItem.appendChild(categoryElement);

    // Optional buttons for edit and delete (can be implemented later)
    // const crudBtnContainer = document.createElement("div");
    // crudBtnContainer.classList.add("crudbtn");

    // const editBtn = document.createElement("button");
    // editBtn.textContent = "Edit";
    // crudBtnContainer.appendChild(editBtn);

    // const deleteBtn = document.createElement("button");
    // deleteBtn.textContent = "Delete";
    // crudBtnContainer.appendChild(deleteBtn);

    // noteItem.appendChild(crudBtnContainer);

    displayNotes.appendChild(noteItem);

    // Clear input fields after adding the note
    getTitle.value = "";
    getNote.value = "";
  }

  displayAddedNote(); // Call the display function here or after another action
}

addNoteBtn.addEventListener("click", addNewNote);