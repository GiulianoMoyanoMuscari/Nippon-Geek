// Boton carrito
const cartBtn = document.querySelector('.navbar__cart-label')
// Boton menu
const menuBtn = document.querySelector('.navbar__menu-label')
// div carrito
const cartMenu = document.querySelector('.cart')
// div menu(hamburguesa)
const navbarMenu = document.querySelector('.navbar__list')
// overlay
const overlay = document.querySelector('.overlay')


/* ----------- Logica Menu/Carrito modal ----------- */
/*Funcion para abrir el carrito */
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");

  if (navbarMenu.classList.contains("open-menu")) {
    navbarMenu.classList.remove("open-menu");
    return;
  }

/*   overlay.classList.toggle("show-overlay"); */
}

/*Funcion para abrir el menu */
const toggleMenu = () => {
  navbarMenu.classList.toggle("open-menu");

  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }

/*   overlay.classList.toggle("show-overlay"); */
}

/*Funcion para cerrar el menu/carrito cuando se clickea el overlay */
/* const closeOnOverlayClick = () => {
  cartMenu.classList.remove("open-cart");
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
} */
/* --------------------- FIN ------------------------------ */


//Funcion Inicializadora
const init = () => {
  cartBtn.addEventListener('click', toggleCart);
  menuBtn.addEventListener('click', toggleMenu);
/*   overlay.addEventListener('click', closeOnOverlayClick); */
}

init();