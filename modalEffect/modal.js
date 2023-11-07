const seeMore=document.querySelector('.see-more')
const container=document.querySelector('.modal-container')
const close=document.querySelector('.close')
seeMore.addEventListener('click',function(){
  container.classList.add('dynamic')
})
close.addEventListener('click' ,function(){
  container.classList.remove('dynamic');
})