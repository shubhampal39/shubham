
var menu=document.querySelector('#menu');
var bg=document.querySelector('#bg');
menu.addEventListener('click',function(){
    bg.style.transform='scale(.8)';
    bg.style.borderRadius='10px';
    bg.style.boxShadow='0 150px 45px -100px rgba(0,0,0,0.2)';
})