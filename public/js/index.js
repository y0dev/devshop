/* eslint-disable */
const navbar = document.querySelector("header nav");

if (navbar) {
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
  };
  const cartItem = document.querySelector(".cart-items-container");
  document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("right-0");
  };
}
