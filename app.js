const container = document.querySelector('.container');
const card = document.querySelector('.card');
const sneaker  =document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

container.addEventListener('mousemove', (e)=>{
    
    let x_axis = (window.innerWidth/2 - e.pageX) / 20;
    let y_axis = (window.innerHeight/2 - e.pageY) / 20;
    card.style.transform = `rotateX(${x_axis}deg) rotateY(${y_axis}deg)`;

});

container.addEventListener('mouseenter',()=>{
    
    sneaker.style.transform = `rotateZ(-50deg)`;
})

container.addEventListener('mouseleave',()=>{
    sneaker.style.transform = `rotateZ(0deg)`;
    sneaker.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
})