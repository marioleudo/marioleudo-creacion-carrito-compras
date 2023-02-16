// carrito de compras

const btnCart = document.querySelector(".container-icon");
btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);
const infoProduct = document.getElementById("infoproducts");

fetch("https://mindhub-xj03.onrender.com/api/petshop")
  .then((response) => response.json())
  .then((data) => {});
