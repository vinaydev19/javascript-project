let rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
  let rectlocation = rect.getBoundingClientRect();
  let insiderectval = Math.round(details.clientX - rectlocation.left);
  if (insiderectval < rectlocation.width / 2) {
    let redcolor = gsap.utils.mapRange(
      0,
      rectlocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
        rectlocation.width/2,
        rectlocation.width,
        0,
        255,
        insiderectval
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0,0,${blueColor})`,
        ease: Power4,
      });
  }
});

console.log(gsap.utils.mapRange(0, 250, 255, 0, 250));



rect.addEventListener('mouseleave', ()=>{
    gsap.to(rect, {
        backgroundColor: 'white'
    })
})