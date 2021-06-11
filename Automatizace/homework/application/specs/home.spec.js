let homePage = require('../pages/home.page')

// FEATURE HOMEPAGE of registration app
describe('HomePage', () => {
  before(() => {
    homePage.open()
  })

  // check title, because it is the core of page :D 
  it('should have correct title', () => {
    expect(browser).toHaveTitle("Přihlášky Czechitas")
  })

  describe('Navigation', () => {
    beforeEach(() => {
      homePage.open()
    })
    
    // we had problems with that text for login so 
    //we want to be sure that everything works properly
    it('text of #login is correct', () => {
      expect(homePage.navbar.loginButton).toHaveText("Přihlásit")
    })
    
    // basic check if link works
    it('should open /prihlaseni if you click on Prihlasit', () => {
      homePage.navbar.loginButton.click()

      expect(browser).toHaveUrl(homePage.baseUrl + "prihlaseni")
    })

     it('bug link PT-97 - Link to Czechitas web does not work', () => {
      homePage.links.linkCzechitas.click()
      expect(browser).toHaveTitle('IT is your future too. - Czechitas')
      
    }) 
  })

 
})
//npm run test:prod -- --spec 