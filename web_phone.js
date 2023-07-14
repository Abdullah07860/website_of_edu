burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
navright=document.querySelector('.navright')


burger.addEventListener('click', () => {
    navbar.classList.toggle('cor3');
    navlist.classList.toggle('cor1');
    navright.classList.toggle('cor1');
})