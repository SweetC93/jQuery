$("document").ready(function() {
    $("#anuncio")
    .text("¡CLICK! Para cambiar de color")
    .width(400)
    .height(400)
    .hide()
    .fadeIn(3000)
});



let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];

$("#anuncio").on("click", function() {
    let random = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", random);
});


