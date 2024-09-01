let products = [
  {
    name: "Office Chair",
    headline: "Trade Craft High",
    price: "5000",
    image: "https://m.media-amazon.com/images/I/71Q5E1x4GWL._SX679_.jpg",
  },
  {
    name: "Samsung",
    headline: "Samsung Galaxy S24 Ultra 5G",
    price: "139999",
    image: "https://m.media-amazon.com/images/I/81lek2iav1L._SL1500_.jpg",
  },
  {
    name: "Redmi A3",
    headline: "Premium Halo Design",
    price: "20000",
    image: "https://m.media-amazon.com/images/I/71dJSabHYiL._SL1500_.jpg",
  },
];
let PopularProducts = [
  {
    name: "Office Chair",
    headline: "Trade Craft High",
    price: "5000",
    image: "https://m.media-amazon.com/images/I/71Q5E1x4GWL._SX679_.jpg",
  },
  {
    name: "Samsung",
    headline: "Samsung Galaxy S24 Ultra 5G",
    price: "139999",
    image: "https://m.media-amazon.com/images/I/81lek2iav1L._SL1500_.jpg",
  },
  {
    name: "Redmi A3",
    headline: "Premium Halo Design",
    price: "20000",
    image: "https://m.media-amazon.com/images/I/71dJSabHYiL._SL1500_.jpg",
  },
];

let productsHtml = document.querySelector(".products");
let popularsHtml = document.querySelector(".populars");
let carticon = document.querySelector(".carticon");
let cartexpnd = document.querySelector(".cartexpnd");

function showProducts() {
  let addproducts = "";
  products.forEach((obj, index) => {
    addproducts += `
                <div class="product w-fit rounded-xl p-2 bg-white">
              <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
              <img src="${obj.image}"/>
              </div>
              <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">
                  ${obj.name}
                </h1>
                <div class="flex justify-between w-full items-center mt-2">
                  <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377;${obj.price}</h4>
                  </div>
                  <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                  </button>
                </div>
              </div>
            </div>
        `;
  });

  // console.log(addproducts);

  productsHtml.innerHTML = addproducts;
}

showProducts();

function showPopularProducts() {
  let AddPopularProducts = "";
  PopularProducts.forEach((product) => {
    AddPopularProducts += `
                  <div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${product.image}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${product.headline}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
            </div>
          </div>
        `;
  });
  // console.log(AddPopularProducts);

  popularsHtml.innerHTML = AddPopularProducts;
}

showPopularProducts();

let cart = [];

function addtocart() {
  productsHtml.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      cart.push(products[e.target.dataset.index]);
      console.log(cart);
    }
  });
}

function showAddtocart() {
  carticon.addEventListener("click", () => {
    cartexpnd.style.display = "block";
    let addproductsTocart = "";
    cart.forEach((prod, index) => {
      addproductsTocart += `
                      <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 gap-2 bg-white p-2 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src="${prod.image}"/>
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>`;
    });
    cartexpnd.innerHTML = addproductsTocart;
  });
}

addtocart();
showAddtocart();
