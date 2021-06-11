
let loginPage = {
    get loginForm() {return $('.card-body')},
    get forgottPassword() {return $('.btn.btn-link')},
    get areYouFirstTime() {return $('.form-group.row.mb-0 div')},
    
    inputs: {
        get email() {return $('#email')},
        get password() {return $('#password')},
    },

    buttons: {
        get logIn() {return $('.btn.btn-primary')},
        get buttUser() {return $('.dropdown-toggle strong')},
        get buttLogOut() {return $('#logout-link')},
        get registerBtn() {return $('.btn.btn-secondary.ml-2')},
    },

    login(email, password) {
        this.inputs.email.setValue(email)
        this.inputs.password.setValue(password)
        this.buttons.logIn.click()
    },

    logOut() {
        this.buttons.buttUser.click()
        this.buttons.buttLogOut.click()
    },
}

module.exports = loginPage


