/* ZADANI:
  Doplň všechny testcasy
  přidej kroky 
  přidej assertion (expect)
*/

/*
HINT: Secret password je schovane v HTML (nedaleko inputu pro secret heslo)
  Je potreba ho najit a precist. Nevadi, ze neni zobrazene - data tam jsou.
  Cislo se generuje kazdym nactenim stranky, nestaci si jej jednou precist a 
    a pak ho pouzivat celou dobu. 
  Hlasky maji dva stavy - 1) heslo je spravne, 2) heslo je spatne.
  Good luck! 
*/

describe('Secret number', () => {
  let isPasswordCorrect
  let buttonCheck
  let inputPassword
  let password

  before(() => { //muzes zmenit na beforeEach, pokud je potreba
    browser.url('https://automation.cervik.repl.co/inputs.html') //go to the page with application

    isPasswordCorrect = browser.$('#passwordHelpBlock') //find the text which is displayed after click on the button
    buttonCheck = browser.$('#checkSecretNumber') //button for the checking
    inputPassword = browser.$('#secretNumberInput') //input for super secret password
    password = browser.$('#secretPassword').getValue()  //value of super secret password
  })

  it('confirmation appears after validating correct secret number', () => {
  
    inputPassword.setValue(password) //set value of password to the text field for password
    
    buttonCheck.click() //click on the button for confirmation

    expect(isPasswordCorrect).toHaveText('Super secret je super správně.') //check if text is the same as I expected
    
  })

  it('error appears after validating wrong secret number', () => {

    inputPassword.setValue('sayHello') //set value 'sayHello' to the text field for password

    buttonCheck.click() //click on the button for confirmation

    expect(isPasswordCorrect).toHaveText('Super secret je super špatně.') //check if text is the same as I expected
    
  })

  it('error appears after validating empty secret number', () => {
    
    inputPassword.setValue('') //set empty value to the text field for password

    buttonCheck.click() //click on the button for confirmation

    expect(isPasswordCorrect).toHaveText('Super secret je super špatně.') //check if text is the same as I expected

  })
})