let menuActive = document.querySelectorAll('.navbar-menu a')
menuActive.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault
    menuActive.forEach((element) => {
      element.classList.remove('active')
    })
    e.target.classList.add('active')
  })
})