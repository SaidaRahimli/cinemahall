const formEl = document.getElementById('form')
const usernameEl = document.getElementById('username')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const confirmPasswordEl = document.getElementById('password2')




// funksiyalar 

// function salamla() {
//     console.log("salam")
// }

// salamla()

// function salamla(name) {
//     console.log("Salam" + name)
// }

// salamla("Seide")

function showError(input, mesaj) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = mesaj 
}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function elektronPoctunDuzgunluyunuYoxla(emailQutu) {
    const regularExpression  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regularExpression.test(emailQutu.value.trim())) {
        showSuccess(emailQutu)
    }
}

// elektronPoctunDuzgunluyunuYoxla(emailEl)

// showSuccess(usernameEl)
// showSuccess(passwordEl)
// showSuccess(emailEl)
// showSuccess(confirmPasswordEl)

// showError(emailEl,"Elektron poctu duzgun daxil et")
// showError(usernameEl,"Istifadeci adini duzgun daxil et")
// showError(passwordEl,"Shifreni duzgun daxil et duzgun daxil et") 
// showError(confirmPasswordEl,"Shifreler uygun deyil") 