window.addEventListener("mousemove", (detalis) => {
//   console.log(detalis.clientX);
let rect = document.querySelector('#rect')


  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100+rect.getBoundingClientRect().width/2,
    window.innerWidth - (100+rect.getBoundingClientRect().width/2),
    detalis.clientX
  );
  gsap.to("#rect", {
    left: xval,
    ease: Power3,
  });
});
