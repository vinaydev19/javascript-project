const isStatus = document.getElementById("isStatus");
const btn = document.getElementById("Add");
let check = 0;

Add.addEventListener("click", () => {
  if (check == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
