const burger = document.getElementById('burger');
const menu = document.getElementById('navMenu');
function toggleMenu(e){
  e.preventDefault();e.stopPropagation();
  const open=menu.classList.toggle('open');
  burger.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
}
burger.addEventListener('click',toggleMenu);
burger.addEventListener('touchend',toggleMenu,{passive:false});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  burger.classList.remove('open');menu.classList.remove('open');document.body.style.overflow='';
}));
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.style.boxShadow=scrollY>20?'0 2px 20px rgba(0,0,0,.3)':'none';
},{passive:true});
