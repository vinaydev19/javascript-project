const elem = document.querySelectorAll(".elem");
const elemImg = document.querySelector("#elem1 img");

elem.forEach((elems) => {
  elems.addEventListener("mouseenter", (e) => {
    elems.childNodes[3].style.opacity = 1;
  });
  elems.addEventListener("mouseleave", (e) => {
    elems.childNodes[3].style.opacity = 0;
  });
  elems.addEventListener("mousemove", (e) => {
    elems.childNodes[3].style.left = e.x + "px";
    elems.childNodes[3].style.top = e.y + "px";
  });
});
