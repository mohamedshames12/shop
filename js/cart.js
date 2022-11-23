const wrpper = document.querySelector(".wrpper");
const searchInput = document.querySelector(".search");
const viewProducts = document.querySelector(".view-products div");
const view = document.querySelector(".view-products");
const badge = document.querySelector(".badge");
const btnCart = document.getElementById("cart");
let products = [];
// for search input
searchInput.addEventListener("keyup", (eo)  => {
  const value = eo.target.value.toLowerCase()
  const searchProducts = products.filter((product) => {
    return product.title.toLowerCase()?.includes(value);
  })
  dispalyProducts(searchProducts)
})


// for API compatibility
const loadProducts = async () => {
  try{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = await data.products;
    dispalyProducts(products);
  } catch(err){
    console.log(err)
  }

}
// get all products from the API 
const dispalyProducts = (products) => {
  const htmlString = products
  .map((product) => {
    return `
            <div class="box">
                <img src="${product.images[0]}" alt="" class="image" >
                <h1 class="title" >${product.title}</h1>
                <p class="price" >$${product.price}</p>
                <button class="btn" onclick="addedToCart(${product.id})">Add to cart</button>
           </div>
          `;
  })
  wrpper.innerHTML = htmlString.join('');
}
loadProducts()


// get id of products

function addedToCart(id) {
  let choocesItem = products.find((item) => item.id === id);
  viewProducts.innerHTML += `<p>${choocesItem.title}</p>` 
  badge.style.display = "block";
  const productsLength = document.querySelectorAll('.view-products div p');
  badge.innerHTML = productsLength.length;
  // for open items
  btnCart.addEventListener("click", (eo) => {
    eo.preventDefault();
      if (view.innerHTML != ""){
        view.classList.toggle("active");
      }
  })
}

