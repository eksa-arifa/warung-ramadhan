const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.navbar .large .bars');
const a = navbar.querySelectorAll('ul li a');
const atas = document.querySelector('.atas');

bars.addEventListener('click', ()=>{
  navbar.classList.toggle('active');
})

a.forEach(element => {
  element.onclick = ()=>{
    navbar.classList.remove('active');
  }
})

window.onscroll = ()=>{
  if (scrollY > 100) {
    navbar.classList.add('fixed');
  }else{
    navbar.classList.remove('fixed');
  }
  
  if (scrollY > 300) {
    atas.classList.add('active');
  }else{
    atas.classList.remove('active');
  }
}