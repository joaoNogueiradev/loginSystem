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

    let users = []

    if(localStorage.getItem("users") !== null) {
        users = JSON.parse(localStorage.getItem('users'))
    }

    const userExists = users.some(user => user.userEmail === userEmail)

    if(userExists){
        alert("This email is already signed!");
        return;
    }

    users.push({
        username:userName,
        userEmail: userEmail,
        userPassword:userPassword
    })

    localStorage.setItem("users", JSON.stringify(users));

    document.querySelector('#signUpName').value = "";
    document.querySelector('#signUpEmail').value = "";
    document.querySelector('#signUpPass').value = "";

    alert("Usuário cadastrado com sucesso!");
}

const loginUser = () => {
    let loginEmail = document.getElementById("loginEmail").value
    let loginPass = document.getElementById("loginPassword").value
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        alert("There are no users signed up!");
    } else {
        const findUser = users.find((user) => user.userEmail === loginEmail)
    
        if (findUser === undefined) {
            alert("User not found!");
            document.querySelector('#loginEmail').value = "";
            document.querySelector('#loginPassword').value = "";
        } else if (loginPass !== findUser.userPassword) {
            alert("Incorrect password!");
            document.querySelector('#loginEmail').value = "";
            document.querySelector('#loginPassword').value = "";
        } else {
            // Redirecionar
        }
    }
}