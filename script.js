function addToCart(productName, price){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.push({name:productName,price});localStorage.setItem("cart",JSON.stringify(cart));
alert("Товар добавлен в корзину!")}

function loadCart(){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let itemsContainer=document.getElementById("cart-items");let total=0;
if(itemsContainer){itemsContainer.innerHTML="";
cart.forEach(item=>{let li=document.createElement("li");
li.textContent=item.name+" — ₽"+item.price;itemsContainer.appendChild(li);
total+=item.price;});
document.getElementById("total-price").textContent="Итого: ₽"+total;}}

function checkout(){alert("Заказ оформлен! Мы свяжемся с вами.");
localStorage.removeItem("cart");window.location.href="index.html";}

window.onload=loadCart;
