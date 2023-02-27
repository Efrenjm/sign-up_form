
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var number = document.getElementById("phone");
var password = document.getElementById("password");
var passConfirm = document.getElementById("confirm-password");
var button = document.getElementById("button")
// firstName.addEventListener("input", () => {
//     firstName.alert("Escribe el formato válido")
// // });
// firstName.setCustomValidity("The name is too short, please use at least 3 characters.")
// lastName.setCustomValidity("The last name is too short, please use at least 3 characters.")
// number.setCustomValidity("Please use a valid phone number. For example: (999)-999-9999.")
// email.setCustomValidity("Please use a valid email. For example: youremail@domain.com.")
// password.setCustomValidity("The password must be at least 8 characters.")

// console.log(firstName)
// firstName.addEventListener("keydown", (event, index) => {
//     if (event.keyCode == '87'){
//         console.log("hola mundo")
//     } else {
//         event.target.setCustomValidity('');
//     }
// });
firstName.addEventListener("input", minLengthValidation(firstName))
lastName.addEventListener("input", minLengthValidation(lastName))
password.addEventListener("input", minLengthValidation(password))

password.addEventListener("input", passValidation(password, passConfirm))
passConfirm.addEventListener("input", passValidation(password, passConfirm))

function minLengthValidation(variable){
    varName = variable.name;
    console.log(variable.value);
    varName == "password" ? minLength = 8 : minLength = 3;
    if (variable.value.length <= minLength){
        message = 'The '+varName+' is too short, please use at least '+minLength+' characters.'
        variable.setCustomValidity(message)
    } else {
        variable.setCustomValidity('');
    }
}
function passValidation(password, passConfirm){
    if (password.value != passConfirm.value){
        passConfirm.setCustomValidity("The password must match.")
    } else {
        passConfirm.setCustomValidity('');
    }
}

// button.addEventListener("click", () =>{
//     console.log(firstName.value)
//     firstName.validity.customError=false
// })

// button.addEventListener("input", () =>{
//     if (password.value != passConfirm.value){
//         password.setCustomValidity("Las contraseñas no coinciden")
//     }
// })