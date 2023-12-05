const taskform = document.getElementById('form-input')
const taskInput = document.getElementById('taskInput')
const priorityInput = document.getElementById('priority-input')
const ul = document.getElementById('tasks')
const clearBtn = document.querySelector('.clear-btn')
const Todo = document.querySelector('.taskHeading')



//display task from storage
function displayItems() {
    const itemsFromStorage = getTaskFromStorage();
    const priorityFromStorage = getPriorityFromStorage();

    // Iterate through tasks and their priorities
    itemsFromStorage.forEach((task, index) => {
        const priority = priorityFromStorage[index]; // Get the corresponding priority
        addItemToDOM(task, priority);
    });

    UIchecker();
}
function onAddItemSubmit (e){
    e.preventDefault()
    const newTask = taskInput.value
    const newPriority = priorityInput.value
    
    if(newTask === ''){
        alert('Please enter task')
    }

    // add task to DOM
    addItemToDOM(newTask, newPriority)

    //add task to localstorage
    addTaskToStorage(newTask)

    taskInput.value = ' '

    UIchecker()
}

//add to DOM
function addItemToDOM(task, priority){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(task))
    li.className = 'task'
    const priorityValue = createPriority(priority)
    const remove = removeBtn('removeTask')
    const div = taskContainer('li-components')
    div.appendChild(priorityValue)
    div.appendChild(remove)
    li.appendChild(div)
    ul.appendChild(li)

    return ul
}

//add to storage
function addTaskToStorage(task){
    const itemsFromStorage = getTaskFromStorage()
    
    //add new item to array
    itemsFromStorage.push(task)
    // convert to JSON  string & set to local storage
    localStorage.setItem('tasks', JSON.stringify(itemsFromStorage))
}
function addPriorityToStorage(priority){
    const itemsFromStorage = getPriorityFromStorage()
    
    //add new item to array
    itemsFromStorage.push(priority)
    // convert to JSON  string & set to local storage
    localStorage.setItem('priority', JSON.stringify(itemsFromStorage))
}


function getTaskFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('tasks')=== null){
        itemsFromStorage = []
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('tasks'))
    }
    return itemsFromStorage
}
function getPriorityFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('priority')=== null){
        itemsFromStorage = []
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('priority'))
    }
    return itemsFromStorage
}
// create container for li components
function taskContainer(classes){
    const div = document.createElement('div')
    div.className = classes
    return div
}


// create prioriy
function createPriority(newPriority){
    
    const span = document.createElement('span')
    span.className = 'priority'
    span.textContent = newPriority
    
    //priority level change of color
    if(newPriority === 'High'){
        span.style.backgroundColor = 'green'
        span.style.color = 'white'
    }else if(newPriority === 'Medium'){
        span.style.backgroundColor = 'blue'
        span.style.color = 'white'
    }else{
        span.style.backgroundColor = 'yellow'
    }
    addPriorityToStorage(newPriority)
    return span
}

function removeBtn(classes){
    const button = document.createElement('button')
    button.className = classes
    const i = document.createElement('i')
    i.className = 'bi bi-x-circle'
    button.appendChild(i)
    return button
}

function onTaskClick(e){
    if(e.target.parentElement.classList.contains('removeTask')){
        removeTask(e.target.parentElement.parentElement.parentElement)
    }
}
//removing single task from DOM
function removeTask(task){
    if(confirm('Are you sure?')){
        task.remove()
    }
}

// removing all items from DOM
function onclearAll(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}



function UIchecker(){
    const task = ul.querySelectorAll('li')
    if(task.length === 0){
        Todo.style.display = 'none'
    }else{
        Todo.style.display = 'block'
    }
}



//event listeners
taskform.addEventListener('submit', onAddItemSubmit)
clearBtn.addEventListener('click', onclearAll)
ul.addEventListener('click', onTaskClick)
document.addEventListener('DOMContentLoaded', displayItems)

UIchecker()

// localStorage.removeItem('tasks')
// localStorage.removeItem('priority')