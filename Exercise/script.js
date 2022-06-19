// const addButton = document.querySelectorAll('.product-item')
// const buttonCart = document.querySelectorAll('.btn-cart')
// for(let i=0;i<buttonCart.length;i++){
//   buttonCart[i].addEventListener('click',function(){
//     cartNumbers(products[i])
//     totalCost(products[i]);
//   })
// }

// let products=[
//   {
//     name:'T-Shirt Summer Vibes',
//     tag:'image1',
//     price: 15,
//     inCart:0
//   },
//   {
//     name:'T-Shirt Summer Vibes',
//     tag:'image-2',
//     price: 15,
//     inCart:0
//   },
//   {
//     name:'T-Shirt Summer Vibes',
//     tag:'image-3',
//     price: 17,
//     inCart:0
//   },
//   {
//     name:'T-Shirt Summer Vibes',
//     tag:'image-4',
//     price: 18,
//     inCart:0
//   }
// ]

// function onLoadCartNumber(){
//   let productNumbers= localStorage.getItem('cartNumbers');
//   if(productNumbers){
//     document.querySelector('.cart-count').textContent=productNumbers;
//   }
// }

// function cartNumbers(product){
//   let productNumbers= localStorage.getItem('cartNumbers');
//   productNumbers=parseInt(productNumbers)
//   localStorage.setItem('cartNumbers', 1)
//   if(productNumbers){
//     localStorage.setItem('cartNumbers',productNumbers + 1)
//     document.querySelector('.cart-count').textContent=productNumbers+1
//   }
//   else{
//     localStorage.setItem('cartNumbers', 1)
//     document.querySelector('.cart-count').textContent=1

//   }
  
//   setItems(product);
// }
// function setItems(product){
//   let cartItems = localStorage.getItem('productsInCart')
//   cartItems = JSON.parse(cartItems)
  
//   if(cartItems != null){
//     if(cartItems[product.tag] == undefined){
//       cartItems = {
//         ...cartItems,
//         [product.tag]:product
//       }
//     }
//     cartItems[product.tag].inCart += 1
//   }
//   else{
//     product.inCart=1;
//     cartItems = {
//       [product.tag]:product
//     }
//   }
//   localStorage.setItem('productsInCart',JSON.stringify(cartItems))
// }

// function totalCost(product){
//   let cartCost = localStorage.getItem('totalCost')
//   if(cartCost !=null){
//     cartCost=parseInt(cartCost)
//     localStorage.setItem('totalCost',cartCost+product.price);
//   }
//   else{
//     localStorage.setItem('totalCost', product.price)
//   }
// }

// function displayCart(){
//   let cartItems=localStorage.getItem('productsInCart')
//   cartItems=JSON.parse(cartItems)
//   let productContainer=document.querySelector(".cart-main")
//   let cartCost = localStorage.getItem('totalCost')
  
//   if(cartItems && productContainer){
//       productContainer.innerHTML = '';
//       Object.values(cartItems).map(item => {
//           productContainer.innerHTML+=`
//             <div class="product">
//               <div class="product-button">
//                 <button class="btn-delete">Delete</button>
//               </div>
              
//                 <span class="main-text">${item.name}</span>
//                 <div class="quantity">
//                 <i class="fa-solid fa-plus"></i>
//                 <span class="incart">${item.inCart}</span>
//                 <i class="fa-solid fa-minus"></i>
//                 </div>
//                 <span class="price">${item.price}</span>
                
//                 <div class="money">
//                 ${item.inCart*item.price+",00 $"}<div>
//             </div>
//           `
//       })
//       productContainer.innerHTML +=
//         `<div class="Total">
//             <p class="Total-title">Total: </p>
//             <p class="Total-price">${cartCost},00$</p>
//         </div>`
        
//   }
// }
// onLoadCartNumber();
// displayCart();
const addButton = document.querySelectorAll('.product-item')
const buttonCart = document.querySelectorAll('.btn-cart')
for(let i=0;i<buttonCart.length;i++){
  buttonCart[i].addEventListener('click',function(){
    cartNumbers(products[i])
    totalCost(products[i]);
  })
}

let products=[
  {
    name:'T-Shirt Summer Vibes',
    tag:'image1',
    price: 15,
    inCart:0
  },
  {
    name:'T-Shirt Summer Vibes',
    tag:'image-2',
    price: 15,
    inCart:0
  },
  {
    name:'T-Shirt Summer Vibes',
    tag:'image-3',
    price: 17,
    inCart:0
  },
  {
    name:'T-Shirt Summer Vibes',
    tag:'image-4',
    price: 18,
    inCart:0
  }
]

function onLoadCartNumber(){
  let productNumbers= localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart-count').textContent=productNumbers;
  }
}

function cartNumbers(product){
  let productNumbers= localStorage.getItem('cartNumbers');
  productNumbers=parseInt(productNumbers)
  localStorage.setItem('cartNumbers', 1)
  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1)
    document.querySelector('.cart-count').textContent=productNumbers+1
  }
  else{
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cart-count').textContent=1

  }
  
  setItems(product);
}
function setItems(product){
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  
  if(cartItems != null){
    if(cartItems[product.tag] === undefined){
      cartItems = {
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart += 1
  }
  else{
    product.inCart=1;
    cartItems = {
      [product.tag]:product
    }
  }
  localStorage.setItem('productsInCart',JSON.stringify(cartItems))
}

function totalCost(product){
  let cartCost = localStorage.getItem('totalCost')
  if(cartCost !=null){
    cartCost=parseInt(cartCost)
    localStorage.setItem('totalCost',cartCost+product.price);
  }
  else{
    localStorage.setItem('totalCost', product.price)
  }
}

/*----------*/
function addItem(id) {

  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  console.log(cartItems[id])
  cartItems[id].inCart++;
}
function removeItem(id) {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  if (cartItems[id] <= 0) return
  cartItems[id].inCart--;
}


/*----------*/


function displayCart(){
  let cartItems=localStorage.getItem('productsInCart')
  cartItems=JSON.parse(cartItems)
  let productContainer=document.querySelector(".cart-main")
  let cartCost = localStorage.getItem('totalCost')
  
  if(cartItems && productContainer){
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
          productContainer.innerHTML+=`
            <div class="product" id='${item.tag}'>
              <div class="product-button">
                <button class="btn-delete">Delete</button>
              </div>
              
                <span class="main-text">${item.name}</span>
                <div class="quantity">
                <i class="fa-solid fa-plus"></i>
                <span class="incart">${item.inCart}</span>
                <i class="fa-solid fa-minus"></i>
                </div>
                <span class="price">${item.price}</span>
                
                <div class="money">
                ${item.inCart*item.price+",00 $"}<div>
            </div>
          `
      })
      productContainer.innerHTML +=
        `<div class="Total">
            <p class="Total-title">Total: </p>
            <p class="Total-price">${cartCost},00$</p>
        </div>`
        
  }
}
onLoadCartNumber();
displayCart();
const productList = document.querySelectorAll('.product')
console.log(productList)
productList.forEach(element => {
  const inscreasetBtn = element.querySelector('.fa-plus')
  const descreaseBtn = element.querySelector('.fa-minus')
  console.log(inscreasetBtn,descreaseBtn)
  const currentId = element.getAttribute('id')
  inscreasetBtn.addEventListener('click', () => {
    addItem(currentId)
  })
  descreaseBtn.addEventListener('click', () => {
    removeItem(currentId)
  })
});
