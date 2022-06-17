
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(reponse => reponse.json())
  // .then(data=>console.log(data))

  // const nav = document.querySelectorAll('.menu-item a')
  // nav[1].onclick=function(e){
  //   this.style.color="red"   
  // }
  const addLi=document.querySelector('.product-list')
  addLi.innerHTML += `<li class="product-item col-3">
  <div class="product-image">
    <img src="img/image (1).png" alt="" />
    <span class="badge badge-promotion">-30%</span>
  </div>
  <div class="product-infor">
    <div class="product-card">
      <div class="product-name">
        <a href="">
          <h4 class="name-text">T-Shirt Summer Vibes</h4>
        </a>
      </div>
      <div class="product-cost">
        <span class="product-price promotion">$89.99</span>
        <span class="cost-text">$119.99</span>
      </div>
    </div>
  </div>
</li>`