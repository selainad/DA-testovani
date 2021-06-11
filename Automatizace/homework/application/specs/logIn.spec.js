//prihlaseni do aplikace
let homePage = require('../pages/home.page')
let loginPage = require('../pages/login.page')

describe('Login form', () => {
    before(() => {
        homePage.open()
        homePage.navbar.loginButton.click()
    })

    it('login form is visible', () => {
        expect(loginPage.loginForm).toBeVisible()
    })

    it('has button able to click', () => {
        homePage.navbar.loginButton.click()
        expect(loginPage.buttons.logIn).toBeClickable()
    })

    it('has button for register to the application', () => {
        expect(loginPage.buttons.registerBtn).toBeVisible()
    })

    it('has clickable link for forgotten password', () => {
        loginPage.forgottPassword.click()
        expect(browser.$('.btn-primary')).toHaveText('Resetovat heslo')
    })

    it.skip('has correct text before button Register', () => {
        expect(loginPage.areYouFirstTime).toHaveText('Jste zde poprvé? Zaregistrujte se')
    })

})

describe('Log in into the application', () => {
    before(() => {
        homePage.open()
    })

    afterEach(() => {
        loginPage.logOut()
    })

    it('is able as master admin', () => {
        //navigate to login form
        homePage.navbar.loginButton.click()

        //call function login from login.page with correct cerdentials to the application
        loginPage.login('da-app.master@czechitas.cz', 'AppRoot123')

        expect(browser.$('.nav-item.dropdown span')).toHaveText('Přihlášen')
    })

    it('is able as admin with correct credentials', () => {
        //navigate to login form
        homePage.navbar.loginButton.click()

        //call function login from login.page with correct cerdentials to the application
        loginPage.login('da-app.admin@czechitas.cz', 'Czechitas123')

        expect(browser.$('.nav-item.dropdown span')).toHaveText('Přihlášen')
    })


    it('is able as parent with correct credentials', () => {
        //navigate to login form
        homePage.navbar.loginButton.click()

        //call function login from login.page with correct cerdentials to the application
        loginPage.login('da-app.parent-radka@czechitas.cz', 'Czechitas123')

        expect(browser.$('.nav-item.dropdown span')).toHaveText('Přihlášen')
    })
})

describe('Log in into the application is not able', () => {
    beforeEach(() => {
        homePage.open()
    })

    it('with incorrect password', () => {
        //navigate to login form
        homePage.navbar.loginButton.click()

        //call function login
        loginPage.login('da-app.master@czechitas.cz', 'PinkUnicorn1')

        expect(browser.$('.invalid-feedback')).toHaveText('These credentials do not match our records.')
        //expect(browser.$('div*=invalid')).toBeDisplayedInViewport();

    })

    it('with incorrect email but correct password', () => {
        //navigate to login form
        homePage.navbar.loginButton.click()

        //call function login
        loginPage.login('da-master@czeachitas.cz', 'AppRoot123')
        expect(browser.$('.invalid-feedback')).toHaveText('These credentials do not match our records.')

    })

})

