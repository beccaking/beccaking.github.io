/*
$(function(){
  let allMedia = document.querySelectorAll('.media div')

  for(i=0;i<allMedia.length;i++){
    allMedia[i].setAttribute('id', i)
  }

  $('.arrow.left').on('click keypress', function(event){
    if(event.keyCode == 13 || $(this).data('clicked', true)){
      let activeCard = document.getElementsByClassName('active')[0]
      let activeCardId = activeCard.getAttribute('id')
      let lastCard = document.getElementById((allMedia.length - 1).toString())
      let firstCard = document.getElementById('0')

      activeCard.classList.remove('active')

      if(activeCardId == 0){
        lastCard.classList.add('active')
      } else {
        let prevCard = document.getElementById(parseInt(activeCardId) - 1)
        prevCard.classList.add('active')
      }
    }
  })

  $('.arrow.right').on('click keypress', function(event){
    if(event.keyCode == 13 || $(this).data('clicked', true)){
      let activeCard = document.getElementsByClassName('active')[0]
      let activeCardId = activeCard.getAttribute('id')
      let lastCard = document.getElementById((allMedia.length - 1).toString())
      let firstCard = document.getElementById('0')

      activeCard.classList.remove('active')
      
      if(activeCardId == lastCard.getAttribute('id')){
        firstCard.classList.add('active')
      } else {
        let nextCard = document.getElementById((parseInt(activeCardId) + 1))
        nextCard.classList.add('active')
      }
    }
  })
})
*/