const container = document.querySelector(".container");
const love = document.querySelector("i");

container.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(() => {
      love.style.opacity = 0
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
