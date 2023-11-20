const form = document.getElementById('form-input')


function onSubmit (e){
    e.preventDefault()
    
    const itemInput = document.getElementById('taskInput').value
    const priority = document.getElementById('priority-input').value
    const priorityChoice = document.createElement('span')
    console.log(itemInput, priority);
    if(itemInput === '' && priority === ''){
        const error = document.createElement('span')
        error.className = 'error'
        error.textContent = 'please fill the field'
        error.style.visibility = 'visible'
        form.appendChild(error)
        console.log(error);
    }else{
        taskComponent()
        
    }
    if(priority === 'High'){
        priorityChoice.style.backgroundColor = 'green'
    }else if(priority === 'Medium'){
        priorityChoice.style.backgroundColor = 'yellow'
        priorityChoice.style.color = 'black'
    }else{
        priorityChoice.style.backgroundColor = 'orange'
    }
    
    function taskComponent (){
        const ul = document.querySelector('.tasks')
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = 'li-components'
        li.className = 'task'
        li.textContent = itemInput
        priorityChoice.className = 'priority'
        priorityChoice.textContent = priority
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        div.appendChild(checkbox)
        div.appendChild(priorityChoice)
        li.appendChild(div)
        ul.appendChild(li)
        console.log(li);
    }
    
}



form.addEventListener('submit', onSubmit)