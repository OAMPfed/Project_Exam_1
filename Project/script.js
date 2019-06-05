let modalX = document.getElementById("menuModal");
let hamburger = document.getElementById("menuHamburger");
let cross = document.getElementById("menuCross");

function menuOpen() {
  if (modalX.classList.contains("menuClosed")) {
    modalX.classList.remove("menuClosed");
    modalX.classList.add("menuOpen");
    hamburger.style.display = "none";
    cross.style.display = "block";
  } else {
    modalX.classList.remove("menuOpen");
    modalX.classList.add("menuClosed");
    cross.style.display = "none";
    hamburger.style.display = "block";
  }
};

function menuCollapse() {
  modalX.classList.remove("menuOpen");
  modalX.classList.add("menuClose");
}