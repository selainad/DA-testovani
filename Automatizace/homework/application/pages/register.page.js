
let registerPage = {
    inputs: {
        get nameLastname() { return $('#name') },
        get email() { return $('#email')},
        get password() { return $('#password')},
        get passwConfirmation() {return $('#password-confirm') }
    },

    buttons: {
        get bttnConfirm() {return $('.btn.btn-primary')}
    },

    register(nameLastname, email, password, passwConfirmation) {
        this.inputs.nameLastname.setValue(nameLastname),
        this.inputs.email.setValue(email + '+reg' + (Math.floor(Math.random()*1000)) + '@gmail.com')
        //browser.pause(2000)
        this.inputs.password.setValue(password)
        this.inputs.passwConfirmation.setValue(passwConfirmation)
        this.buttons.bttnConfirm.click()
    },
}





module.exports = registerPage