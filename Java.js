const mouse = document.querySelector('.mouse');
window.addEventListener('mousemove',(e) =>{
    mouse.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
})