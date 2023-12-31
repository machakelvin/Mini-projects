const regForm = document.querySelector('.registration')
const fname = document.querySelector('#fname')
const middleName = document.querySelector('#Mname')
const surname = document.querySelector('#lname')
const regno = document.querySelector('#regno')
const gender = document.querySelector('#sex')
const email = document.querySelector('#email')
let errorMessage = document.querySelector('.error-message');
let passMessage = document.querySelector('.pass-message')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#cpassword')

function onSubmit(e){
    e.preventDefault()
    // check if fields are empty
    checkEmpty()
    
    

}

function checkEmpty(){
    if(fname.value === '' || middleName.value === '' || surname.value === ''){
        errorMessage.textContent = 'Enter all names'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
        errorMessage.style.margin = '15px'
    }
    if(regno.value === ''){
        errorMessage.textContent = 'Enter your registration Number'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }else if (!validateRegistrationNumber(regno.value)) {
        errorMessage.textContent = 'Invalid registration number'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }
    if(gender.value === ''){
        errorMessage.textContent = 'Choose your gender'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }
    if(email.value === ''){
        errorMessage.textContent = "Enter Email Address"
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }else if (!validateEmail(email.value)) {
        errorMessage.textContent = 'Enter the valid email address'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }
    if(password.value === ''){
        errorMessage.textContent = 'Enter password'
        errorMessage.style.backgroundColor = 'red'
        errorMessage.style.padding = '16px'
    }else if(validatePassword(password.value)){
        errorMessage.textContent = 'good'
        errorMessage.style.backgroundColor = 'green'
        errorMessage.style.padding = '16px'
    }
    

}
// password validation
function validatePassword(password){
    const pass = password.length
    if(pass <= 8){
        passMessage.textContent = 'Password too short'
        passMessage.style.backgroundColor = 'red'
        passMessage.style.padding = '10px'
    }else{
        passMessage.textContent = 'Strong password'
        passMessage.style.backgroundColor = 'green'
        passMessage.style.padding = '10px'
    }
}

// function to validate RegNo
function validateRegistrationNumber(regno) {
    // Define the regular expression for the specified format
    const regex = /^(19|20)\d{2}-\d{2}-\d{4}$/;

    // Test the registration number against the regular expression
    return regex.test(regno);
}

function validateEmail(email) {
    // Define the regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return regex.test(email);
}









regForm.addEventListener('submit', onSubmit)









