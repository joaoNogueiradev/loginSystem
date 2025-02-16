const signUpForm = document.getElementById('signUpForm')
const loginForm = document.getElementById('loginForm')

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const saveUser = () => {

    let userName = document.querySelector('#signUpName').value
    let userEmail = document.querySelector('#signUpEmail').value
    let userPassword = document.querySelector('#signUpPass').value

    let users = new Array();

    if(localStorage.hasOwnproperty("users")){
        
    }
}

const jsonUser = (username, email, password) => {

}