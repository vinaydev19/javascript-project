const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    movecursor(e.pageX, e.pageY)
});

const movecursor = function(pageX, pageY) {
  cursor.style.left = pageX + 'px';
  cursor.style.top = pageY + 'px';
}

