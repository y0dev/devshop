/* eslint-disable */
const navbar = document.querySelector("header nav");
const cookie = document.querySelector("cookie.cookie-popup");

if (navbar) {
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
  };
  const cartItem = document.querySelector(".cart-items-container");
  document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("right-0");
  };

  const searchForm = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("scale-y-100");
  };
}

if (cookie) {
  const acceptBtn = cookie.querySelector("button");
  const HOUR = 60 * 60;
  const MONTH = 24 * 30 * HOUR;
  acceptBtn.onclick = () => {
    // Setting cookie for 1 month, after 1 month it will expire automatically
    document.cookie = "CookieBy=DevShop; max-age=" + MONTH;
    if (document.cookie) {
      // If cookie is set
      cookie.classList.add("hidden");
    } else {
      // Cookie can't be set, please unblock this cookie setting
    }
  };

  let checkCookie = document.cookie.indexOf("CookieBy=DevShop"); //checking our cookie
  //if cookie is set then hide the cookie box else show it
  checkCookie != -1
    ? cookie.classList.add("hidden")
    : cookie.classList.remove("hidden");
}
