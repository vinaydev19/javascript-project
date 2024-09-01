let arr = [
  {
    name: "Petals of roses",
    image:
      "https://i.pinimg.com/474x/5b/42/1c/5b421ce4573105be3102d8f3b989eb52.jpg",
  },
  {
    name: "Animals of town",
    image:
      "https://i.pinimg.com/236x/ac/03/23/ac0323d1a9ad1554333c9a109c462865.jpg",
  },
  {
    name: "the crowd of city",
    image:
      "https://i.pinimg.com/236x/60/b3/a6/60b3a6234daff11bfe114334776558d4.jpg",
  },
  {
    name: "fruits of planet",
    image:
      "https://i.pinimg.com/236x/40/bd/3c/40bd3c115262432da5e5864f0c16e559.jpg",
  },
  {
    name: "orange peeled",
    image:
      "https://i.pinimg.com/236x/50/45/f1/5045f14bb338c7ee51aeb2d7420b8f13.jpg",
  },
  {
    name: "web design",
    image:
      "https://i.pinimg.com/474x/36/ee/9a/36ee9aa3055b1e1b2c9e03fe0beef0dd.jpg",
  },
  {
    name: "apple juice",
    image:
      "https://i.pinimg.com/236x/bc/26/c6/bc26c692fdecfa2c8ee3063acc6c7eed.jpg",
  },
  {
    name: "rashi khanna",
    image:
      "https://i.pinimg.com/236x/63/4f/0c/634f0ccae0602f58bfa4f6424db09934.jpg  ",
  },
  {
    name: "kriti sanon",
    image:
      "https://i.pinimg.com/originals/84/41/fd/8441fd0792dbf24e45651e209f481ec2.jpg",
  },
  {
    name: "alia bhatt",
    image:
      "https://i.pinimg.com/236x/34/7e/62/347e62ecc03274658f864cd81c15d254.jpg",
  },
  {
    name: "Pooja Hegde",
    image:
      "https://i.pinimg.com/474x/92/97/8a/92978a6cadeb9124f262be66cd76adee.jpg",
  },
  {
    name: "Kiara advani",
    image:
      "https://i.pinimg.com/236x/a1/97/57/a1975751e87b735cf663483df34f42e3.jpg",
  },
  {
    name: "Web Design",
    image:
      "https://i.pinimg.com/236x/b9/94/a2/b994a2e2d0f2a310f430851cfddf8b62.jpg",
  },
  {
    name: "Web Design",
    image:
      "https://i.pinimg.com/236x/c3/6a/55/c36a55f4800c184ffc9b2e3fd161603f.jpg",
  },
  {
    name: "Avatar: The Last Airbender",
    image:
      "https://i.pinimg.com/236x/b5/9a/22/b59a225de4a04af870907663ce0de271.jpg",
  },
  {
    name: "Avatar",
    image:
      "https://i.pinimg.com/236x/1e/7e/4d/1e7e4d11c01e57f32410ece8c1961646.jpg",
  },
  {
    name: "Tony Stark As Dr Doom",
    image:
      "https://i.pinimg.com/474x/5e/a4/34/5ea4346071345c4b55709da567173cd2.jpg",
  },
  {
    name: "tony stark",
    image:
      "https://i.pinimg.com/236x/a5/4a/2a/a54a2a4e19b041b6a7d4023322ad7fbe.jpg",
  },
  {
    name: "ironman",
    image:
      "https://i.pinimg.com/474x/df/4d/ba/df4dbac6a1d9e62fe63b900c676fa0f7.jpg",
  },
];

function showTheCards() {
  let clutter = "";
  arr.forEach((obj) => {
    clutter += `
    
    <div class="box">
        <img class="cursor-pointer" src="${obj.image}" />
        <div class="caption">${obj.name}</div>
    </div>

    `;
  });
  document.querySelector(".container").innerHTML = clutter;
  //   console.log(clutter);
}

function handleSearchFunc() {
  let inputbox = document.querySelector("#searchinput");
  let searchdata = document.querySelector(".searchdata");

  inputbox.addEventListener("focus", () => {
    document.querySelector(".overlay").style.display = "block";
  });
  inputbox.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
  });

  inputbox.addEventListener("input", () => {
    console.log(inputbox.value);
    const filteredArr = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(inputbox.value)
    );
    let clutter = "";
    filteredArr.forEach((obj) => {
      clutter += `
        <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>
        `;
    });
    searchdata.style.display = "block";
    searchdata.innerHTML = clutter;
    console.log(filteredArr);
  });
}

handleSearchFunc();
showTheCards();
