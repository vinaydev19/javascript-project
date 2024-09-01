const productsArr = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    brand: "TechBrand",
    price: 699.99,
    stock: 120,
    image: "/images/smartphone.jpg",
    description:
      "High-end smartphone with a 6.5-inch OLED display, 128GB storage, and a 48MP camera.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    brand: "SoundCo",
    price: 149.99,
    stock: 200,
    image: "/images/wirelesscharger.jpg",
    description:
      "Noise-cancelling over-ear wireless headphones with 30 hours battery life.",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    brand: "RunFast",
    price: 89.99,
    stock: 75,
    image: "/images/runningshoes.jpg",
    description:
      "Lightweight running shoes with breathable mesh upper and cushioned sole.",
  },
  {
    id: 4,
    name: "Electric Kettle",
    category: "Kitchen Appliances",
    brand: "HomeEase",
    price: 29.99,
    stock: 150,
    image: "/images/electrickettle.jpg",
    description:
      "1.7-liter electric kettle with auto shut-off and boil-dry protection.",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    category: "Wearables",
    brand: "FitTrack",
    price: 49.99,
    stock: 300,
    image: "/images/fitnesstracker.jpg",
    description:
      "Waterproof fitness tracker with heart rate monitor, sleep tracking, and step counter.",
  },
  {
    id: 6,
    name: "4K TV",
    category: "Home Entertainment",
    brand: "ViewMax",
    price: 499.99,
    stock: 80,
    image: "/images/4ktv.jpg",
    description:
      "55-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
  },
  {
    id: 7,
    name: "Blender",
    category: "Kitchen Appliances",
    brand: "BlendMaster",
    price: 39.99,
    stock: 90,
    image: "/images/blender.jpg",
    description:
      "High-speed blender with 6 stainless steel blades and multiple speed settings.",
  },
  {
    id: 8,
    name: "Gaming Console",
    category: "Gaming",
    brand: "GameStation",
    price: 399.99,
    stock: 60,
    image: "/images/gamingconsole.jpg",
    description:
      "Next-gen gaming console with 1TB storage and 4K gaming support.",
  },
  {
    id: 9,
    name: "Espresso Machine",
    category: "Kitchen Appliances",
    brand: "CoffeeCraft",
    price: 199.99,
    stock: 40,
    image: "/images/espressomachine.jpg",
    description:
      "Semi-automatic espresso machine with milk frother and 15-bar pump.",
  },
  {
    id: 10,
    name: "Digital Camera",
    category: "Cameras",
    brand: "PhotoPro",
    price: 599.99,
    stock: 50,
    image: "/images/digitalcamera.jpg",
    description:
      "24MP digital camera with interchangeable lenses and 4K video recording.",
  },
  {
    id: 11,
    name: "Office Chair",
    category: "Furniture",
    brand: "ErgoComfort",
    price: 129.99,
    stock: 70,
    image: "/images/officechair.jpg",
    description:
      "Ergonomic office chair with lumbar support, adjustable height, and breathable mesh back.",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    category: "Audio",
    brand: "SoundWave",
    price: 59.99,
    stock: 150,
    image: "/images/bluetoothspeaker.jpg",
    description:
      "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.",
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    category: "Personal Care",
    brand: "SmileBright",
    price: 39.99,
    stock: 100,
    image: "/images/electrictoothbrush.jpg",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes and a 2-minute timer.",
  },
  {
    id: 14,
    name: "Smartwatch",
    category: "Wearables",
    brand: "TechWear",
    price: 199.99,
    stock: 120,
    image: "/images/smartwatch.jpg",
    description:
      "Smartwatch with fitness tracking, GPS, and notification alerts.",
  },
  {
    id: 15,
    name: "Gaming Mouse",
    category: "Computers",
    brand: "GameGear",
    price: 49.99,
    stock: 180,
    image: "/images/gamingmouse.jpg",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and 16000 DPI sensor.",
  },
  {
    id: 16,
    name: "Yoga Mat",
    category: "Fitness",
    brand: "FlexFit",
    price: 24.99,
    stock: 200,
    image: "/images/yogamat.jpg",
    description:
      "Non-slip yoga mat with extra cushioning and moisture-resistant surface.",
  },
  {
    id: 17,
    name: "Air Purifier",
    category: "Home Appliances",
    brand: "PureAir",
    price: 149.99,
    stock: 60,
    image: "/images/airpurifier.jpg",
    description:
      "HEPA air purifier with real-time air quality monitoring and 3 fan speeds.",
  },
  {
    id: 18,
    name: "Laptop Stand",
    category: "Computers",
    brand: "WorkEase",
    price: 29.99,
    stock: 130,
    image: "/images/laptopstand.jpg",
    description:
      "Adjustable laptop stand with cooling fans and ergonomic design.",
  },
  {
    id: 19,
    name: "Instant Pot",
    category: "Kitchen Appliances",
    brand: "CookQuick",
    price: 99.99,
    stock: 100,
    image: "/images/instantpot.jpg",
    description:
      "7-in-1 programmable pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.",
  },
  {
    id: 20,
    name: "Electric Scooter",
    category: "Transportation",
    brand: "ZoomRide",
    price: 299.99,
    stock: 45,
    image: "/images/electricscooter.jpg",
    description:
      "Foldable electric scooter with 15-mile range and 15mph top speed.",
  },
  {
    id: 21,
    name: "Wireless Charger",
    category: "Electronics",
    brand: "ChargeTech",
    price: 19.99,
    stock: 250,
    image: "/images/wirelesscharger.jpg",
    description:
      "Fast wireless charger with Qi compatibility and anti-slip design.",
  },
  {
    id: 22,
    name: "Action Camera",
    category: "Cameras",
    brand: "AdventureCam",
    price: 149.99,
    stock: 80,
    image: "/images/actioncamera.jpg",
    description:
      "Waterproof action camera with 4K video recording and wide-angle lens.",
  },
  {
    id: 23,
    name: "Electric Shaver",
    category: "Personal Care",
    brand: "SmoothShave",
    price: 59.99,
    stock: 100,
    image: "/images/electricshaver.jpg",
    description:
      "Rechargeable electric shaver with pivoting head and wet/dry use.",
  },
  {
    id: 24,
    name: "Smart Thermostat",
    category: "Home Automation",
    brand: "EcoSmart",
    price: 129.99,
    stock: 50,
    image: "/images/smartthermostat.jpg",
    description:
      "Wi-Fi smart thermostat with programmable schedules and energy-saving features.",
  },
  {
    id: 25,
    name: "Cordless Drill",
    category: "Tools",
    brand: "DrillPro",
    price: 79.99,
    stock: 90,
    image: "/images/cordlessdrill.jpg",
    description:
      "18V cordless drill with variable speed control and 2 batteries.",
  },
  {
    id: 26,
    name: "Smart Doorbell",
    category: "Home Security",
    brand: "SafeHome",
    price: 99.99,
    stock: 70,
    image: "/images/smartdoorbell.jpg",
    description:
      "Smart video doorbell with two-way audio, motion detection, and night vision.",
  },
  {
    id: 27,
    name: "Tablet",
    category: "Electronics",
    brand: "TabTech",
    price: 249.99,
    stock: 80,
    image: "/images/tablet.jpg",
    description: "10-inch tablet with 64GB storage, Wi-Fi, and 8MP camera.",
  },
  {
    id: 28,
    name: "Robot Vacuum",
    category: "Home Appliances",
    brand: "CleanBot",
    price: 229.99,
    stock: 60,
    image: "/images/robotvacuum.jpg",
    description:
      "Smart robot vacuum with app control, scheduled cleaning, and self-charging.",
  },
  {
    id: 29,
    name: "Electric Grill",
    category: "Kitchen Appliances",
    brand: "GrillMaster",
    price: 89.99,
    stock: 85,
    image: "/images/electricgrill.jpg",
    description:
      "Indoor electric grill with adjustable temperature control and non-stick plates.",
  },
  {
    id: 30,
    name: "Noise Cancelling Earbuds",
    category: "Audio",
    brand: "QuietTunes",
    price: 129.99,
    stock: 150,
    image: "/images/noisecancellingearbuds.jpg",
    description:
      "True wireless noise cancelling earbuds with 24-hour battery life and touch controls.",
  },
  {
    id: 31,
    name: "Smart Thermostat",
    category: "Home Automation",
    brand: "EcoSmart",
    price: 129.99,
    stock: 50,
    image: "/images/smartthermostat.jpg",
    description:
      "Wi-Fi smart thermostat with programmable schedules and energy-saving features.",
  },
  {
    id: 32,
    name: "Gaming Console",
    category: "Gaming",
    brand: "GameStation",
    price: 399.99,
    stock: 60,
    image: "/images/gamingconsole.jpg",
    description:
      "Next-gen gaming console with 1TB storage and 4K gaming support.",
  },
];

let products = document.querySelector(".product-grid");
let searchBtn = document.querySelector(".searchBtn");
let filterCategories = document.querySelector(".filter-Categories");
let filterPrice = document.querySelector(".filter-price");

productsArr.forEach((product) => {
  products.innerHTML += `
    
                <div id="${product.id}" class="product-card">
              <img src="${product.image}" alt="Product 1" />
              <h2>${product.name}</h2>
              <p id="price">${product.price}</p>
              <p>category: ${product.category}</p>
              <p>brand: ${product.brand}</p>
              <p>
                ${product.description}
              </p>
              <button>Add to Cart</button>
            </div>
    
      `;
});

searchBtn.addEventListener("click", () => {
  let searchInputBox = document
    .querySelector(".searchInputBox")
    .value.toLowerCase();

  productsArr.forEach((product) => {
    let productCard = document.getElementById(product.id);

    if (
      product.name.toLowerCase().includes(searchInputBox) ||
      product.brand.toLowerCase().includes(searchInputBox) ||
      product.category.includes(searchInputBox)
    ) {
      productCard.style.display = "block";
    } else {
      productCard.style.display = "none";
    }
  });
});

filterCategories.addEventListener("change", () => {
  console.log(filterCategories.value);
  let filterCategoriesValue = filterCategories.value.toLowerCase();

  productsArr.forEach((product) => {
    let productCard = document.getElementById(product.id);

    if (filterCategoriesValue === "all") {
      productCard.style.display = "block";
    } else if (filterCategoriesValue === "other") {
      if (
        ["electronics", "kitchen appliances", "gaming"].includes(
          product.category.toLowerCase()
        )
      ) {
        productCard.style.display = "none";
      } else {
        productCard.style.display = "block";
      }
    } else if (product.category.toLowerCase() === filterCategoriesValue) {
      productCard.style.display = "block";
    } else {
      productCard.style.display = "none";
    }
  });
});

filterPrice.addEventListener("change", () => {
  let filterPriceValue = filterPrice.value;

  if (filterPriceValue === "price-asc") {
    productsArr.sort((a, b) => a.price - b.price);
  } else if (filterPriceValue === "price-desc") {
    productsArr.sort((a, b) => b.price - a.price);
  }

  products.innerHTML = ``;

  productsArr.forEach((product) => {
    products.innerHTML += `
      
                  <div id="${product.id}" class="product-card">
                <img src="${product.image}" alt="Product 1" />
                <h2>${product.name}</h2>
                <p id="price">${product.price}</p>
                <p>category: ${product.category}</p>
                <p>brand: ${product.brand}</p>
                <p>
                  ${product.description}
                </p>
                <button>Add to Cart</button>
              </div>
      
        `;
  });
});
