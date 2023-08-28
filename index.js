const inputField = document.querySelector('.inputField');
const button = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');

button.addEventListener('click', function(){
   const list =  document.createElement('li');
   list.innerText = inputField.value;
   list.classList.add ('addList')
   toDoList.appendChild(list);
   inputField.value = ' ';

   list.addEventListener('click', function(){
    list.classList.add('completed')
   })

   list.addEventListener('dblclick', function(){
    toDoList.removeChild(list);
   })
})