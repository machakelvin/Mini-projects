const form = document.getElementById('form-input')
const ul = document.querySelector('.tasks')
function taskComponents(task, priority, Choice){
    const li = document.createElement('li')
    li.className = 'task'
    li.textContent = task
    const div = document.createElement('div')
    div.className = 'li-components'
    const priorityChoice = document.createElement('span')
    priorityChoice.className = 'priority'
    priorityChoice.textContent = priority
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    div.appendChild(priorityChoice)
    div.appendChild(checkbox)
    li.appendChild(div)
    ul.appendChild(li)

    
    return ul;
}

taskComponents('pick up dad', 'High')

function onSubmit(e){
    e.preventDefault()
    const taskInput = document.getElementById('taskInput').value
    const priority = document.getElementById('priority-input').value
    
    console.log(taskInput, priority);
    if(taskInput === '' && priority === ''){
        const error = document.createElement('span')
        error.className = 'error'
        error.textContent = 'please fill the field'
        error.style.visibility = 'visible'
        form.appendChild(error)
        console.log(error);
    }else{
        taskComponents(taskInput,priority)
        
    }
    changeOnPriority()

}

// function to change bg of priority on li element based selected
//function changeOnPriority (){
    
//    if(priority === 'High'){
//        priorityChoice.style.backgroundColor = 'green'
//    }else if(priority === 'Medium'){
//        priorityChoice.style.backgroundColor = 'yellow'
//        priorityChoice.style.color = 'black'
//    }else{
 //       priorityChoice.style.backgroundColor = 'orange'
//   }
    
//}




form.addEventListener('submit', onSubmit)