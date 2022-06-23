import { decimalNumber, getData, setData, products } from "./typescript.js";
const renderUI = () => {
    let product;
    product = getData('data', product);
    let Elementli = document.querySelectorAll('.product-list');
    for (let i = 0; i < Elementli.length; i++) {
        product.forEach((item) => {
            if (item.discount != 0) {
                Elementli[i].innerHTML += `
    <li class="product-item col-3">
    <a href="">
     <div class="product-image">
       <img src="${item.imageUrl}" alt="T-Shirt Summer Vibes" />
       <span class="badge badge-promotion">-${item.discount * 100}%</span>
     </div>
     <div class="product-infor">
       <div class="infor">
         <div class="product-name">
             <h4 class="name-text">${item.name}</h4>
         </div>
         <div class="product-cost">
           <span class="product-price promotion">${decimalNumber((item.price - (item.price * item.discount)))}</span>
           <span class="cost-text">${item.price}</span>
         </div>
       </div>
     </div>
    </a>
    <div class="addToCart">
     <button class="btn-cart" data-id=${item.id}>Add To Cart</button>  
   </div>
   </li>    `;
            }
            else {
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
    </li>`;
            }
        });
    }
};
const addToCart = () => {
    let buttonCart = document.querySelectorAll('.btn-cart');
    for (let i = 0; i < buttonCart.length; i++) {
        buttonCart[i].addEventListener('click', (e) => {
            changeQuantityItemInCart('add', e.target.attributes['data-id'].value);
            countCart();
        });
    }
};
const changeQuantityItemInCart = (active, productId) => {
    let cartData = JSON.parse(localStorage.getItem('cartData'));
    let quantity = 1;
    let showTotal;
    let totalPrice;
    let index = cartData.findIndex((cart) => {
        return cart.id == productId;
    });
    var productSelected = products.find((product) => product.id == productId);
    if (active == 'add') {
        if (index < 0) {
            productSelected['quantity'] = quantity;
            cartData.push(productSelected);
            setData('cartData', cartData);
        }
        else {
            cartData[index].quantity++;
            setData('cartData', cartData);
        }
    }
    if (active == 'increase') {
        if (index < 0) {
            productSelected['quantity'] = quantity;
            cartData.push(productSelected);
            setData('cartData', cartData);
        }
        else {
            cartData[index].quantity++;
            setData('cartData', cartData);
            document.querySelector(`.incart-${productId}`).innerHTML = cartData[index].quantity;
            let showMoney = document.querySelector(`.money-${productId}`);
            showMoney.innerHTML = decimalNumber(cartData[index].quantity * cartData[index].price);
        }
    }
    if (active == 'decrease') {
        if (cartData[index].quantity > 1) {
            cartData[index].quantity--;
            setData('cartData', cartData);
            document.querySelector(`.incart-${productId}`).innerHTML = cartData[index].quantity;
            let showMoney = document.querySelector(`.money-${productId}`);
            showMoney.innerHTML = decimalNumber(cartData[index].quantity * cartData[index].price);
        }
        else if (cartData[index].quantity == 1) {
            let cartRemove = cartData.filter((item) => item.id !== cartData[index].id);
            setData('cartData', cartRemove);
            document.getElementById(`${productId}`).style.display = 'none';
        }
    }
    if (active == 'delete') {
        let cartRemove = cartData.filter((item) => item.id !== cartData[index].id);
        setData('cartData', cartRemove);
        document.getElementById(`${productId}`).style.display = 'none';
    }
    showTotal = document.querySelector('.Total-price');
    if (showTotal) {
        totalPrice.innerHTML = decimalNumber(cartCost());
    }
};
const cartCost = () => {
    let cost = 0;
    let cartCost = 0;
    let totalCost = JSON.parse(localStorage.getItem('cartData'));
    for (let i = 0; i < totalCost.length; i++) {
        cost = decimalNumber(totalCost[i].price * totalCost[i].quantity);
        cartCost += cost;
    }
    return cartCost;
};
const addRemove = () => {
    let add = document.querySelectorAll('.fa-plus');
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener('click', function (e) {
            changeQuantityItemInCart('increase', e.target.attributes['data-id'].value);
            countCart();
        });
    }
    let remove = document.querySelectorAll('.fa-minus');
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            changeQuantityItemInCart('decrease', e.target.attributes['data-id'].value);
            countCart();
            emptyCart();
        });
    }
};
const emptyCart = () => {
    let count = JSON.parse(localStorage.getItem('count'));
    if (count == 0)
        document.querySelector('.cart').innerHTML =
            `<div class=empty-cart>
          <a href="index.html"> 
            <img src="img/emptycart.png">
          </a>
        </div>`;
};
const btnDelete = () => {
    let btnDelete = document.querySelectorAll('.btn-delete');
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', function (e) {
            changeQuantityItemInCart('delete', e.target.attributes['data-id'].value);
            countCart();
            emptyCart();
        });
    }
};
const countCart = () => {
    let amount = 0;
    let showAmount;
    let count;
    let inCart = JSON.parse(localStorage.getItem('cartData'));
    for (let i = 0; i < inCart.length; i++) {
        amount += inCart[i].quantity;
    }
    setData('count', amount);
    count = localStorage.getItem('count');
    showAmount = document.querySelector('.cart-count');
    showAmount.innerHTML = count;
};
const displayCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartData'));
    let productContainer = document.querySelector(".cart-main");
    productContainer.innerHTML = ``;
    if (cartItems && productContainer) {
        cartItems.map((item) => {
            productContainer.innerHTML += `
        <div class="product" id='${item.id}'>
          <div class="product-button">
            <button class="btn-delete" data-id=${item.id}>Delete</button>
          </div>  
          <span class="main-text">${item.name}</span>
          <div class="quantity">
            <i class="fa-solid fa-plus" data-id=${item.id}></i>
            <span class="incart-${item.id}">${item.quantity}</span>
            <i class="fa-solid fa-minus" data-id=${item.id}></i>
          </div>
            <span class="price">$${item.price}</span>
            <div class="money money-${item.id}">
            <span> ${decimalNumber(item.price * item.quantity)}</span>
          <div>
        </div>`;
        });
        productContainer.innerHTML +=
            `<div class="Total">
          <p class="Total-title">Total: </p>
          <p class="Total-price">$${decimalNumber(cartCost())}</p>
        </div>`;
    }
};
window.addEventListener('DOMContentLoaded', () => {
    setData('data', products);
    renderUI();
    addToCart();
    countCart();
    displayCart();
    addRemove();
    btnDelete();
    emptyCart();
});
