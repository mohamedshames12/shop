const wrpper = document.querySelector(".wrpper");
const searchInput = document.querySelector(".search");
const viewProducts = document.querySelector(".view-products div");
const view = document.querySelector(".view-products");
const badge = document.querySelector(".badge");
const btnCart = document.getElementById("cart");

// if user dosn't have email
const email = localStorage.getItem("email");
if(!email){
  window.location = "../auth/register.html";
}



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
              <div class="two-btns">
                <button class="btn" onclick="addedToCart(${product.id})">Add to cart</button>
                <i class="fa-solid fa-heart" style="color:${product.liked === true ? 'red' : ''}" onclick="addedToFavourite(${product.id})"></i>
              </div>
           </div>
          `;
  })
  wrpper.innerHTML = htmlString.join('');
}
loadProducts()


// get id of products
let addToCart = localStorage.getItem("addToCart") ? JSON.parse(localStorage.getItem("addToCart")) : [];

if(addToCart){
  addToCart.map((item) => {
    viewProducts.innerHTML += `<p>${item.title}</p>` 
  })
  badge.style.display = "block";
  badge.innerHTML = addToCart.length;
}



function getUnqueProducts(arr, filterType){
  let uniqe = arr
  .map(item => item[filterType])
  .map((item, i , finel) => finel.indexOf(item) === i && i)
  .filter((item) => arr[item])
  .map(item => arr[item]);

  return uniqe;
}



let AllProducts = [];
// added to cart
function addedToCart(id) {
  let choocesItem = products.find((item) => item.id === id);
  products.map((item) => {
    if(item.id === choocesItem.id){
      item.qty = 1;
    }
  })
  localStorage.setItem("products" , JSON.stringify(products));

  let item = AllProducts.find((i) => i.id === choocesItem.id)

  if(item){
    choocesItem.qty += 1
  }else{
    AllProducts.push(choocesItem)
  }
  addToCart = [...addToCart, choocesItem];
  localStorage.setItem('addToCart', JSON.stringify(addToCart))
  viewProducts.innerHTML += `<p>${choocesItem.title}</p>` 
  const productsLength = document.querySelectorAll('.view-products div p');
  badge.style.display = "block";
  badge.innerHTML = productsLength.length;
}

    // for open items
    btnCart.addEventListener("click", (eo) => {
      eo.preventDefault();
      if(viewProducts.innerHTML !== ""){
        view.classList.toggle("active");
      }
    })

// added to favourite
let favourite = localStorage.getItem("addToCart") ? JSON.parse(localStorage.getItem("addToCart")) : [];

function addedToFavourite(id){
  let choocesItem = products.find((item) => item.id === id);
  choocesItem.liked = true;
  favourite = [...favourite, choocesItem];
  let uniqueProducts = getUnqueProducts(favourite, "id")
  localStorage.setItem('addToFavourite', JSON.stringify(uniqueProducts))
  products.map((item) => {
    if(item.id === choocesItem.id){
      item.liked = true
    }
  })
  localStorage.setItem("products", JSON.stringify(products))
}