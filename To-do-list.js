const form = document.querySelector('#enter-text')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const div = document.querySelector('.add-content')



form.addEventListener('submit',function (e){
    e.preventDefault()
    if (input.value.trim() !== "" ) {
        const li =  document.createElement('li')
   const span = document.createElement('span')
   const closeButton = document.createElement('div')
   closeButton.classList.add('close-button')
   span.classList.add('material-symbols-outlined')
   span.textContent = 'close'
   span.style.cursor ='pointer'
   li.textContent = input.value
   li.style.cursor ='pointer'
closeButton.appendChild(span)
    li.appendChild(closeButton)
   ul.appendChild(li)
   input.value = ""
   let clickCount = 0
   li.addEventListener('click',(e)=>{
    
    if (e.target.tagName == 'LI') {
      clickCount++
      if (clickCount %2 != 0) {
        li.style.textDecoration = 'line-through'
      }else{
        li.style.textDecoration = 'underline';
      }

    }
     if(e.target.tagName == "SPAN"){
        closeButton.parentElement.remove()
    }
   }
 )
    }else{
        alert('Enter your thing!')
    }

})