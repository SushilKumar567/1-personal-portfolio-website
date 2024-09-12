let sidemenu = document.querySelector("#sidemenu");

let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-xmark");

openMenu.addEventListener("click", () => {
  sidemenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
  sidemenu.style.right = "-150px";
});
