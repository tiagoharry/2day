const menu = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const menuDrop = document.querySelector('.menu-drop')

menu.addEventListener('click', () => {
  menuDrop.classList.toggle('hide')
})

/*menuClose.addEventListener('click', () => {
  menuDrop.classList.add('hide')
  menuDrop.style.animation = "up 1s"
  menu.classList.remove('hide')
  menuClose.classList.add('hide')
})*/
