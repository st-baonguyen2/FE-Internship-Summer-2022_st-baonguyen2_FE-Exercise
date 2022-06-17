const tab=document.querySelectorAll('.tab-link')
for(let i=0;i<tab.length;i++){
  tab[i].onclick = function(e){
    document.querySelector('.tab-link.current').classList.remove('current')
    document.querySelector('.tab-content.current').classList.remove('current')
    this.classList.add('current')
    document.getElementById(this.getAttribute('data-tab')).classList.add('current')
  }
}