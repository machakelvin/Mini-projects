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
    // adds items to DOM
    itemList.appendChild(li)
    
    checkUI()
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
        if(confirm('Are you sure?')){
            e.target.parentElement.remove()

            checkUI()
        }
    }
}


// clears all items 
function clearItems(e){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
    checkUI()
}

// removes the filter & clear btn on load
function checkUI (){
    const items = itemList.querySelectorAll('li')
    console.log(items);
    if(items.length === 0){
        clearBtn.style.display = 'none'
        filter.style.display = 'none'
    }else{
        clearBtn.style.display = 'block'
        filter.style.display = 'block'

    }
}
checkUI()

// Event listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
