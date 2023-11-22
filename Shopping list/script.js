const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')


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

function createButton(classes){
    const button = document.createElement('button')
    button.className = classes
    button.textContent = '*'
    return button

}





// Event listenets
itemForm.addEventListener('submit', addItem)