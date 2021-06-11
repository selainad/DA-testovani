/*
ZADANI:
 Kliknout na tlačítko právě když je na něm vyobrazena lištička 🦊 Easy peasy!
  1. Jdi na stranku https://automation.cervik.repl.co/findfox.html
  2. DULEZITE: Pockej, az uvidis 🦊 v buttonu. Podivej se na https://webdriver.io/docs/api/element/waitForDisplayed.html
      ⚠️ Doporucuju zvysit timeout a nastavit interval na 30 (jak casto se bude WDIO ptat, jestli je dany element pritomny)
      DULEZITA CAST JE TEN OBJECT, KTERY TAM LZE DAT DO DANE FUNKCE. TIMEOUT A INTERVAL! { neconeco: 30000, neconeco: 30}
  3. Klikni na tlacitko s 🦊
  4. Udelej screenshot a pojmenuj ho listicka.png
  5. Nastav si dostatecny browser.pause(). Opravdu :) Treba 20 sekund.
  6. Relaxuj :)) 
  HINT: Emoji muzes pouzit v selektoru ;)
  Odevzdej screenshot a kod do moje.czechitas. :) 

*/

describe('Find 🦊 and clik on it', () => {
    //beofore test open the website and maximalize window for more experience
    before(() => {
        browser.url('https://automation.cervik.repl.co/findfox.html')
        browser.maximizeWindow()
    })

    it('if you can', () => {
        
        let fox = browser.$('.btn-primary*=🦊')                 //initailze fox in the browser

        fox.waitForDisplayed({timeout:3000, interval:30})       //wait until the fox appears on the animated button
        
           if (fox.isDisplayed()) {                             //if fox is appeard
              fox.click();                                      //click on the animated button
          }

          browser.saveScreenshot('./listickaPodsita.png')       //make and save screenshot
          
          //check there is text under 🦊 is correct
          expect(browser.$('#somethingForYou p')).toHaveText('Gratuluji! Pátý úkol splněn! Nastav browser.pause(30000) a vychutnej si ohňostroj s 🦊') 
    })
})


