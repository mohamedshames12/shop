const email = localStorage.getItem("email");

if (!email) {
  window.location = "../auth/register.html";
}

const wrpper = document.querySelector(".wrpper");
let noItems = document.querySelector(".noItems");


function viewProducts(allProducts = []) {
 
  if(JSON.parse(localStorage.getItem("addToCart")).length === 0)
    noItems.style.display = "block";
    noItems.innerHTML = "There is no Product!";
  
  let items = JSON.parse(localStorage.getItem("addToCart")) || allProducts;
  let productsUl = items.map((item) => {
    return `
        <div class="box">
                <img src="${item.images[0]}" alt="" class="image" >
                <h1 class="title" >${item.title}</h1>
                <p class="price" >$${item.price}</p>
                <button class="btn" onclick="removeFromCart(${item.id})">Remove from cart</button>
        </div>
        `;
  });
  wrpper.innerHTML = productsUl.join('');
}
viewProducts()


function removeFromCart(id){
  let productsInLocl = localStorage.getItem("addToCart");
  if(productsInLocl){
    let items = JSON.parse(productsInLocl);
    let filterItem = items.filter((item) => item.id !== id);
    localStorage.setItem("addToCart", JSON.stringify(filterItem))
    viewProducts(filterItem);
  }
}