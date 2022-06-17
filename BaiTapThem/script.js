const dropDown=document.querySelectorAll('.dropdown-btn')
console.log(dropDown)
for(let i=0;i<dropDown.length;i++){
    dropDown[i].addEventListener('click',function (e){
      e.target.classList.toggle('active')
      e.target.nextElementSibling.classList.toggle('active')
    })
  }