
const list=document.getElementById('todo-list');
const inp=document.getElementById('inp');
const sbmt=document.getElementById('btn');



console.log('task #1 Successful');
const addTask =() =>{
    
    event.preventDefault();
    const newDiv=document.createElement('div');
    newDiv.classList.add('task');
    const check =document.createElement('button');
    check.innerHTML= `<i class="fas fa-check-circle fa-3x"></i>`;
    check.classList.add('btn1');
    check.classList.add('fas');
    newDiv.appendChild(check);
    
    const newTodo =document.createElement('li');
    newTodo.innerText=inp.value;
    console.log('value= ',inp.value);
    if(newTodo.innerText!="")
    {
    newDiv.appendChild(newTodo);
    const del =document.createElement('button');
    del.innerHTML =`<i class="fas fa-trash-alt fa-3x"></i>`;
    del.classList.add('reset');
    del.classList.add('fas');
    newDiv.appendChild(del);
    list.appendChild(newDiv);
    check.addEventListener('click',()=>{
       newTodo.classList.add('strike');
       check.classList.add('hide');
    })
    del.addEventListener('click',()=>{
        
        newTodo.classList.add('strike');
        check.classList.add('hide');
        newDiv.classList.add('fall');
        newDiv.addEventListener('transitionend',()=>{
            newDiv.remove();
        });
        
    })
    inp.value="";

    if (window.matchMedia("(max-width: 600px)").matches) {
        del.innerHTML =`<i class="fas fa-trash-alt fa-2x"></i>`;
        check.innerHTML= `<i class="fas fa-check-circle fa-2x"></i>`;

      } else {
        del.innerHTML =`<i class="fas fa-trash-alt fa-3x"></i>`;
        check.innerHTML= `<i class="fas fa-check-circle fa-3x"></i>`;
      }
    }
    else{
      alert("Please enter a Task to add");
    }
    
   

}
sbmt.addEventListener('click',addTask);





    
