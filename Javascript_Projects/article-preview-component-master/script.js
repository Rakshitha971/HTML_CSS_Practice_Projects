const shareBtn = document.querySelector('.share-btn')
const socialLinks = document.querySelector('.social-links-container')
const mobileShareBtn = document.querySelector('.mobile-author-share-btn')
const mobileShareBar = document.querySelector('.mobile-social-sharing-bar')
const mobileShareArea = document.querySelector('.mobile-author-area')

shareBtn.addEventListener('click', () => {
  socialLinks.classList.toggle('hidden')
})

mobileShareBtn.addEventListener('click', () => {
  mobileShareBar.style.display = 'flex'
  mobileShareArea.style.display = 'none'
})

mobileShareBar.addEventListener('click', () => {
  mobileShareBar.style.display = 'none'
  mobileShareArea.style.display = 'flex'
})
