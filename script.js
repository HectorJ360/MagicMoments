const barras = document.querySelector(".barras");
const menu = document.querySelector(".menu");

barras.addEventListener("click", function() {
    menu.classList.toggle("activo");
});


document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !barras.contains(event.target)) {
        menu.classList.remove("activo");
    }
});
