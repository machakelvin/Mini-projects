const button = document.querySelector('button')
const jokeText = document.querySelector('#joke')
const jokeContainer = document.querySelector('.joke')

function getJoke(){
    const fetchJoke = new XMLHttpRequest()
    fetchJoke.open('GET', 'https://api.chucknorris.io/jokes/random')

    fetchJoke.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            console.log('joke fetched');
            const joke = JSON.parse(this.responseText)
            jokeText.innerHTML = joke.value
        }
    
    }
    fetchJoke.send() 
    
}

// function checkUI(){
//     if(jokeText.innerHTML == ''){
//         jokeContainer.style.display = 'none'
    
//     }else{
//         jokeContainer.style.display = 'block'
//     }
// }




button.addEventListener('click', getJoke)