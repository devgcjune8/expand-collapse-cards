const toggleBtn = document.querySelectorAll('.expand-collapse-toggle');

toggleBtn.forEach( btn => {
   btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('expanded')
    
   })
}

)

console.log(toggleBtn);