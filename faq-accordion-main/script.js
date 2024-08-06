const faqItems = document.querySelectorAll('.faq-items')

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question')
  const answer = item.querySelector('.answer')
  const plusIcon = item.querySelector('.plus-icon')
  const minusIcon = item.querySelector('.minus-icon')

  question.addEventListener('click', (e) => {
 

    plusIcon.classList.toggle('Inactive')
   
    minusIcon.classList.toggle('Active')
    
    answer.classList.toggle('Active')
  })
})
