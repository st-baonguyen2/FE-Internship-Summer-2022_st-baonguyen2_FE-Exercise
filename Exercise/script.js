var products = [{
    id: 1,
    name: 'T-Shirt Summer Vibes',
    imageUrl: 'img/image1.png',
    price: 119.99,
    discount: 0.3,
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    imageUrl: 'img/image-2.png',
    price: 119.99,
    discount: 0
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    imageUrl: 'img/image-3.png',
    price: 79.99,
    discount: 0
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    imageUrl: 'img/image-4.png',
    price: 119.99,
    discount: 0
  }
]

function decimalNumber(num) {
  return Math.round(num * 100) / 100;
}

function setData(data, value) {
  localStorage.setItem(data, JSON.stringify(value));
}

function getData(data, value) {
  value = JSON.parse(localStorage.getItem(data));
}

function renderUI() {
  getData('data', products)
  var Elementli = document.querySelectorAll('.product-list')
  for (var i = 0; i < Elementli.length; i++) {
    products.forEach(item => {
      if (item.discount != 0) {
        Elementli[i].innerHTML += `
    <li class="product-item col-3">
    <a href="">
     <div class="product-image">
       <img src="${item.imageUrl}" alt="T-Shirt Summer Vibes" />
       <span class="badge badge-promotion">-${item.discount*100}%</span>
     </div>
     <div class="product-infor">
       <div class="infor">
         <div class="product-name">
             <h4 class="name-text">${item.name}</h4>
         </div>
         <div class="product-cost">
           <span class="product-price promotion">${decimalNumber((item.price-(item.price*item.discount)))}</span>
           <span class="cost-text">${item.price}</span>
         </div>
       </div>
     </div>
    </a>
    <div class="addToCart">
     <button class="btn-cart" data-id=${item.id}>Add To Cart</button>  
   </div>
   </li>    `
      } else {
        Elementli[i].innerHTML += `
    <li class="product-item col-3">
    <a href="">
      <div class="product-image">
        <img src="${item.imageUrl}" alt="Loose Textured T-Shirt" />
      </div>
      <div class="product-infor">
          <h4 class="name-text">${item.name}</h4>
        <span class="product-price">$${item.price}</span>
      </div>
    </a>
    <div class="addToCart">
      <button class="btn-cart" data-id=${item.id}>Add To Cart</button>
    </div>
    </li>`
      }
    })
  }
}

function addToCart() {
  var buttonCart = document.querySelectorAll('.btn-cart');
  for (var i = 0; i < buttonCart.length; i++) {
    buttonCart[i].addEventListener('click', function(e) {
      changeQuantityItemInCart('add', e.target.attributes['data-id'].value);
      countCart()
    })
  }
}

function changeQuantityItemInCart(active, productId) {
  var cartData = JSON.parse(localStorage.getItem('cartData'))
  var quantity = 1;
  var index = cartData.findIndex(function(cart) {
    return cart.id == productId
  });
  var productSelected = products.find((product) => product.id == productId);
  if (active == 'add') {
    if (index < 0) {
      productSelected['quantity'] = quantity
      cartData.push(productSelected)
      setData('cartData', cartData)
    } else {
      cartData[index].quantity++
      setData('cartData', cartData)
    }
  }
  console.log('assss', quantity);
  if (active == 'minus') {}

}

function countCart() {
  var quantity = 0;
  var count = 0;
  var cartData = JSON.parse(localStorage.getItem('cartData'))
  for (var i = 0; i < cartData.length; i++) {
    quantity += cartData[i].quantity
  }
  localStorage.setItem('count', quantity)
  count = localStorage.getItem('count')
  document.querySelector('.cart-count').innerHTML = count
}
window.addEventListener('DOMContentLoaded', function(e) {
  setData('data', products)
  renderUI()
  addToCart()
  countCart()
  displayCart()
});

function cartCost() {
  var cost = 0;
  var cartCost = 0
  var totalCost = JSON.parse(localStorage.getItem('cartData'))
  for (var i = 0; i < totalCost.length; i++) {
    cost = decimalNumber(totalCost[i].price* totalCost[i].quantity)
    cartCost += cost
  }
  return cartCost
}

function displayCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartData'))
  var productContainer = document.querySelector(".cart-main")
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
            <div class="product" id='${item.id}'>
              <div class="product-button">
                <button class="btn-delete">Delete</button>
              </div>  
                <span class="main-text">${item.name}</span>
                <div class="quantity">
                <i class="fa-solid fa-plus"></i>
                <span class="incart">${item.quantity}</span>
                <i class="fa-solid fa-minus"></i>
                </div>
                <span class="price">$${item.price}</span>
                
                <div class="money">
                ${decimalNumber(item.price*item.quantity)}<div>
            </div>  `
    })
    productContainer.innerHTML +=
      `<div class="Total">
            <p class="Total-title">Total: </p>
            <p class="Total-price">$${decimalNumber(cartCost())}</p>
        </div>`
  }
}