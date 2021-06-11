let homePage = require('../pages/home.page')
let loginPage = require('../pages/login.page')
let registerPage = require('../pages/register.page')

describe('Register into the application', () => {
    before(() => {
        homePage.open()
        homePage.navbar.loginButton.click()
        loginPage.buttons.registerBtn.click()
    })

    it('is able to register to the application', () => {
        registerPage.register('Zkouska Automatizace-DS', 'porubacky', 'Automatizace1', 'Automatizace1')

        expect(browser.$('.nav-item.dropdown span')).toHaveText('Přihlášen')
    })


})