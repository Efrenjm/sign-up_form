
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var number = document.getElementById("phone");
var password = document.getElementById("password");
var passConfirm = document.getElementById("confirm-password");
var button = document.getElementById("button")

password.addEventListener("input", ()=>{
    passConfirm.setCustomValidity("")
})
passConfirm.addEventListener("input", ()=>{
    passConfirm.setCustomValidity("")
})
button.addEventListener("click", ()=>{
    if (password.value != passConfirm.value){
        passConfirm.setCustomValidity("The password must match.")
    } 
})
