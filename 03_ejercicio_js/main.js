
$("#elem1").hover (function(){
    console.log ($(this).addClass("destacar"));
    console.log ($("img").attr("src", "img/arbol.jpg"));},
    function(){
    console.log ($(this).removeClass ("destacar"));
    console.log ($("img").attr("src", "img/blanco.jpg"));
});

$("#elem2").hover (function(){
    console.log ($(this).addClass("destacar")); 
    console.log ($("img").attr("src", "img/lago.jpg"));},
    function(){
    console.log ($(this).removeClass ("destacar"));
    console.log ($("img").attr("src", "img/blanco.jpg"));
});

$("#elem3").hover (function(){
    console.log ($(this).addClass("destacar")); 
    console.log ($("img").attr("src", "img/rio.jpg"));},
    function(){
    console.log ($(this).removeClass ("destacar"));
    console.log ($("img").attr("src", "img/blanco.jpg"));
});


$("#elem4").hover (function(){
    console.log ($(this).addClass("destacar")); 
    console.log ($("img").attr("src", "img/sol.jpg"));},
    function(){
    console.log ($(this).removeClass ("destacar"));
    console.log ($("img").attr("src", "img/blanco.jpg"));
});
