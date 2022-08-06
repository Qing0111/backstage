const toggleMenuBtn=document.querySelector('#toggle-btn');
const body=document.querySelector('body');
toggleMenuBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    body.classList.toggle('sidebar-toggled')
});