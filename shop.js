const container = document.querySelector(".product-grid");

const products = [
  {
    name: "Wall Hanger",
    price: 500,
    description:
      "Rustic wooden peg rack for organizing towels and accessories.",
    image: "./Media/product1.jpg",
  },
  {
    name: "Bamboo Toothbrush",
    price: 300,
    description: "Eco-friendly dental care with biodegradable bamboo handles.",
    image: "./Media/product2.jpg",
  },
  {
    name: "Herbal Soap",
    price: 250,
    description: "Natural, handcrafted soap bar with botanical ingredients.",
    image: "./Media/product3.jpg",
  },
  {
    name: "Jute Basket",
    price: 729,
    description: "Storage solution made from sustainable jute fiber.",
    image: "./Media/product4.jpg",
  },
  {
    name: "Wooden Container",
    price: 275,
    description: "Sleek bamboo canisters for plastic-free food storage.",
    image: "./Media/product5.jpg",
  },
  //   {
  //     name: "Bamboo Toothbrush",
  //     price: 300,
  //     description: "Lorem ipsum dolor sit amet consectetur.",
  //     image: "./Media/product6.jpg",
  //   },
  {
    name: "Herbal Creme",
    price: 450,
    description: "Organic skin care balms in recyclable packaging.",
    image: "./Media/product7.jpg",
  },
  {
    name: "Sustainavble Brush",
    price: 450,
    description:
      "Eco-friendly cleaning set with natural bristle brushes and reusable cotton mesh bag.",
    image: "./Media/product8.jpg",
  },
  {
    name: "Ceramic Bowl",
    price: 650,
    description:
      "Handcrafted, durable ceramic bowl for sustainable dining and food preparation.",
    image: "./Media/product9.jpg",
  },
];

const addProducts = () => {
  for (let i = 0; i < products.length; i++) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", products[i]["image"]);
    productImg.setAttribute("width", "100%");

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerText = products[i]["name"];

    const productDesc = document.createElement("p");
    productDesc.classList.add("product-desc");
    productDesc.innerText = products[i]["description"];

    const productAssurity = document.createElement("p");
    productAssurity.classList.add("product-assured");
    productAssurity.innerText = "Environment Friendly";

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerText = `Rs. ${products[i]["price"]}`;

    const addButton = document.createElement("button");
    addButton.classList.add("add-to-cart");
    addButton.innerText = "Add to Cart";

    productContainer.appendChild(productImg);
    productContainer.appendChild(productName);
    productContainer.appendChild(productDesc);
    productContainer.appendChild(productAssurity);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(addButton);

    container.appendChild(productContainer);
  }
};

document.body.onload = addProducts;
