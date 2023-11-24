const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const filter = document.querySelector('.filter')


function addItem(e){
    e.preventDefault()
    const newItem = itemInput.value
    // validate input
    if(newItem === ''){
        alert('Please add an item')
        return
    }
    
    //Create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))
    const button = createButton('button')
    li.appendChild(button)
    itemList.appendChild(li)
    
    itemInput.value = ''
}


//creating button

function createButton(classes){
    const button = document.createElement('button')
    button.className = classes
    button.textContent = '*'
    return button

}

// removes single item clicked
function removeItem(e){
    if(e.target.classList.contains('button')){
        e.target.parentElement.remove()
    }
}


// clears all items 
function clearItems(e){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}


// Event listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
