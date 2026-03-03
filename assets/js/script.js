const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)}
animRing();
document.querySelectorAll('a,button,.tour-card,.dest-card,.testi-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='14px';cursor.style.height='14px';ring.style.width='52px';ring.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='8px';cursor.style.height='8px';ring.style.width='36px';ring.style.height='36px'});
});
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'})}));