const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const filter = document.querySelector('.filter')


function onAddItemSubmit(e){
    e.preventDefault()
    const newItem = itemInput.value
    // validate input
    if(newItem === ''){
        alert('Please add an item')
        return
    }
    //create item DOM
    addItemToDOM(newItem)

    // add item to local storage
    addItemToStorage(newItem)

    
    checkUI()
    itemInput.value = ''
}

// add to DOM
function addItemToDOM(item){
    //Create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(item))
    const button = createButton('button')
    li.appendChild(button)
    // adds items to DOM
    itemList.appendChild(li)

}

function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items')=== null){
        itemsFromStorage = []
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
    //add new item to array
    itemsFromStorage.push(item)
    // convert to JSON  string & set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))

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

// filter items
function filterItems(e){
    const text = e.target.value.toLowerCase()
    const items = itemList.querySelectorAll('li')
    
    items.forEach(item =>{
        const itemName = item.firstChild.textContent.toLocaleLowerCase()
        if(itemName.indexOf(text) != -1){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
        checkUI()
    })
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
    if(items.length && filter.value){
        clearBtn.style.display = 'none'
        filter.style.display = 'none'
        
    }
}


// Event listeners
itemForm.addEventListener('submit', onAddItemSubmit)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
filter.addEventListener('input', filterItems)

checkUI()

localStorage.removeItem('name')