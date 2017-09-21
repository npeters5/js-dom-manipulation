const iceCream = document.querySelector(".ice-cream");
const parent = document.querySelector(".parent");
const link = document.querys(".link");

//two different ways to write the same thing - arrow vs normal(?)

iceCream.addEventListener("click", event => console.log(event));
// iceCream.addEventListener('click', function(event) {} );
