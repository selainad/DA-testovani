/* 
Ověř, že tlačíko Přidej kočku přidá kartu s kočkou.
Ověř, že tlačíko Apokalypsa! smaže všechny karty s kočkou.
Ověř, že počítadlo koček reaguje na přidání kočky, smazání kočky, smazání všech koček
Zajisti, aby Tvé testy byly atomické = aby byly na sobě nezávislé, daly se spouštět jednotlivě.
Tvé testy budou okomentovány a dokumentovány.
Použij funkce `before()` a `beforeEach()`
Vše dle principů co jsme si dnes řekli - jeden testcase, jeden assert (expect), describe (popisuje co) / it (popisuje jak)  
*/

describe('Button for adding cat', () => {
  let addCat;
  let apocalypse;

  //before all tests go to the website with application
  before(() => {
    browser.url('https://automation.cervik.repl.co/adding.html')
  })

  before(() => {
    addCat = browser.$('#addItem')
    apocalypse = browser.$('#removeAll')
  })
  //after each test delete all cats on the page
  afterEach(()=>{
    apocalypse.click()
  })

  it.only('adds one cat after click on', () => {
    //click on the button to add a cat
    addCat.click()

    //find image of cat in the browser
    let isThereCat = browser.$('.card.cat img')

    //check if there is a cat
    expect(isThereCat).toBeDisplayed()
  })

  describe('Button Apocalypse', () => {
    let apocalypse;
    let addCat;

    //before all tests go to the website with application
    before(() => {
      browser.url('https://automation.cervik.repl.co/adding.html')
    })

    before(() => {
      apocalypse = browser.$('#removeAll')
      addCat = browser.$('#addItem')
    })

    //before each of tests click od the button "Add cat" for five times
    before(() => {
      for (let i = 0; i < 5; i++) {
        addCat.click()
      }
    })

    it('delete all cats', () => {
      //click on the button "Apocalypse"
      apocalypse.click()

      //count all cats on the page
      let numbersOfCats = browser.$$('.card.cat')
      
      //there is no cat on the page
      expect(numbersOfCats).toBeElementsArrayOfSize(0);
    })
  })


  describe('Counter', () => {
    let counter;
    let addCat;
    let apocalypse;
    let removeCat;
    let numbersOfCats

    //before all tests go to the website with application
    before(() => {
      browser.url('https://automation.cervik.repl.co/adding.html')
    })

    before(() => {
      //counter
      counter = browser.$('#counter')
      //button "Add cat"
      addCat = browser.$('#addItem')
      //button "Apocalypse"
      apocalypse = browser.$('#removeAll')
      //button "Remove cat"
      removeCat = browser.$('#removeItem')
    })

    //after each of test delete all cats
    afterEach(() => {
      apocalypse.click()
    })

    it('changes value when the cat is added', () => {
      //click on button for adding cat for ten times
      for (let i = 0; i < 10; i++) {
        addCat.click()
      }

      //find all cats on the page
      numbersOfCats = (browser.$$('.card.cat')).length

      //check that the value on the counter is equal to number of cats on the page
      expect(counter).toHaveText(numbersOfCats.toString())
    })

    it('changes when the cat is removed', () => {
       //click on button for adding cat for ten times
      for (let i = 0; i < 10; i++) {
        addCat.click()
      }

      //click on button "Remove cat"
      removeCat.click()

      //find all cats on the page
      numbersOfCats = (browser.$$('.card.cat')).length

      //check that the value on the counter is equal numbers of cats on the page
      expect(counter).toHaveText(numbersOfCats.toString())
    })

    it('changes when all cats are removed', () => {
      
      //button for adding cat and click on it for ten times
      for (let i = 0; i < 10; i++) {
        addCat.click()
      }

      //click on the button "Apocalypse"
      apocalypse.click()

      //find all cats on the page
      numbersOfCats = (browser.$$('.card.cat')).length

      //check that the value is 0 after deleted all cats
      expect(counter).toHaveText(numbersOfCats.toString())
    })
  })

})