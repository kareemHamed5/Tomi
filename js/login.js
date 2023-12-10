const wrapper =document.querySelector('.warapper')
const registerlink =document.querySelector('.register-link')
const loginlink = document.querySelector('.log')


registerlink.onclick = () => {
  wrapper.classList.add('active')
}
loginlink.onclick = () => {
  wrapper.classList.remove('active')
}


