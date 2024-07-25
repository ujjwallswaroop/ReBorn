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

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

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
    // addButton.classList.add("add-to-cart");
    console.log("ji");
    addButton.className = "add-to-cart";
    addButton.innerText = "Add to Cart";

    productContainer.appendChild(productImg);
    productDetails.appendChild(productName);
    productDetails.appendChild(productDesc);
    productDetails.appendChild(productAssurity);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(addButton);

    productContainer.appendChild(productDetails);
    container.appendChild(productContainer);
  }
};

window.addEventListener("load", addProducts);
window.addEventListener("load", start);



function start(){

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  console.log(addToCartButtons);
  const cartItemCount = document.querySelector(".cart-icon span");
  const cartItemsList = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");
  const cartIcon = document.querySelector(".cart-icon");
  const siderbar = document.getElementById("sidebar");
  
  let cartItems = [];
  let total = 0;
  
  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log("clicked");
      const item = {
        name: document.querySelectorAll(".product-name")[index].textContent,
        price: parseFloat(
          document.querySelectorAll(".product-price")[index].textContent.slice(4),
        ),
        quantity: 1,
      };
      console.log(item);
  
      const existingItem = cartItems.find(
        //here
        (cartItem) => cartItem.name === item.name,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push(item);
      }
  
      total += item.price;
  
      updateCartUI();
    });
  });

  function updateCartUI() {
    updateCartItemCount(cartItems.length)
    updateCartItemsList();
    updateCartTotal();
  }

  function updateCartItemCount(count) {
    console.log(count);
    cartItemCount.textContent = count;
  }

  function updateCartItemsList() {
    cartItemsList.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "individual-cart-item");
      cartItem.innerHTML = `
        <span>(${item.quantity}x)${item.name}</span>
        <span class="cart-item-price">Rs. ${(item.price * item.quantity).toFixed(2)}
        <button class = "remove-item" data-index = "${index}"> <i class ="fa-solid fa-times"></i></button>
        </span>
        `;

      cartItemsList.append(cartItem);
    });

    const removeButtons = document.querySelectorAll(".remove-item");

    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        removeItemFromCart(index);
      });
    });
  }

  function removeItemFromCart(index) {
    const removeItem = cartItems.splice(index, 1)[0];
    total -= removeItem.price * removeItem.quantity;
    updateCartUI();
  }

  function updateCartTotal() {
    cartTotal.textContent = `Total: Rs. ${total.toFixed(2)}`;
  }

  cartIcon.addEventListener('click', () => {
    siderbar.classList.toggle('open');
  });

  const closeButton = document.querySelector(".sidebar-close");
  closeButton.addEventListener('click', () => {
    siderbar.classList.remove('open');
  });
}
