let arr = [
  {
    dp: "https://i.pinimg.com/736x/79/37/9f/79379fe8371e9944a9251fd8be23be32.jpg",
    story:
      "https://i.pinimg.com/736x/79/37/9f/79379fe8371e9944a9251fd8be23be32.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/7f/bf/6b/7fbf6b4627363c997904d709af054ce8.jpg",
    story:
      "https://i.pinimg.com/564x/7f/bf/6b/7fbf6b4627363c997904d709af054ce8.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/5c/99/10/5c9910346460a09cde479f8f253e21ab.jpg",
    story:
      "https://i.pinimg.com/564x/5c/99/10/5c9910346460a09cde479f8f253e21ab.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/4c/f6/67/4cf6671c129888bccdbe003b2ba0075c.jpg",
    story:
      "https://i.pinimg.com/736x/4c/f6/67/4cf6671c129888bccdbe003b2ba0075c.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/cb/ea/e3/cbeae3bd8ac1c29fd051534798704fbe.jpg",
    story:
      "https://i.pinimg.com/564x/cb/ea/e3/cbeae3bd8ac1c29fd051534798704fbe.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/61/41/c9/6141c913a086f62f06b8d6b484fef4bd.jpg",
    story:
      "https://i.pinimg.com/736x/61/41/c9/6141c913a086f62f06b8d6b484fef4bd.jpg",
  },
];

let storiyan = document.querySelector(".storiyan");
let fullscreen = document.querySelector(".full-screen");
let clutter = "";
arr.forEach((elem, index) => {
  clutter += ` 
              <div class="story">
                <img id="${index}" src="${elem.dp}" alt="">
            </div>
  `;
});

storiyan.innerHTML = clutter;
console.log(clutter);

storiyan.addEventListener("click", (e) => {
  //   let value = arr[e.target.id].story;
  fullscreen.style.display = "block";
  fullscreen.style.backgroundImage = `url(${arr[e.target.id].story})`;

  setTimeout(() => {
    fullscreen.style.display = "none";
  }, 3000);
});
