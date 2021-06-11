// ZADANI: 
// Rozděl jeden test-case mezi více
// 1 test-case = kroky + 1 expect
// Pojmenuj vhodně testcasy



describe('03 Elements', () => {
    // before every test go to the website 
    beforeEach(() => {
        console.log(new Date())
    })

    before(() => {
        browser.url('https://automation.cervik.repl.co/selectors.html')
    })

    it('has correct name header of fairytale', () => {
        let headerOfStory = browser.$('#pohadka h2')       // najdi nadpis pohadky O Budulinkovi
        expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
    });

    it('fairytale has correct number of paragraphs', () => {

        let paragraphsOfStory = browser.$$('#pohadka p')  // najdi vsechny paragraphs pohadky O Budulinkovi

        expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16

    });

    it('find paragraph wchich contains word "lištičky"', () => {

        let foxsInStory = browser.$('p*=lištičky')         // najdi paragraph, kde se vyskytuje slovo "lištičky"

        expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
    });

    it('image of fairytale has the path to the picture', () => {

        let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi

        // overi, ze dany element ma cestu k obrazku, takze to je ten spravny image
        expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
    });

    it('counter showes the correct value', () => {

        let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        let likeCounter = browser.$('#lvlAwesome')         // najdi pocitadlo pod pohadkou

        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(250)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    });

    /* 
bonus 1 ukol
Přidej další možné testcasy pro danou stránku
Title
Odkazů v navigaci je 9
H1 obsahuje správný text
Sekce Zadání a Hint mají správné text v H2
Kliknutím na logo se stránka přesměruje na “Home”
*/

    it('title of the page is correct', () => {
        let title = browser.$('title')

        expect(title).toHaveTitle('DA | Selectors')

    });

    it('there are ten links on the main page ', () => {

        let numbersOfLinks = browser.$$('.nav-item')       // najdi vsechny elementy se tridou nav-item

        expect(numbersOfLinks).toBeElementsArrayOfSize(10)
    });

    it('H1 contains correct text ', () => {
        let containerBody= browser.$('.container.body')
        let textInH1 = containerBody.$('h1')

        expect(textInH1).toHaveText('Selektory')
    });

    it.only('after click on the logo go to the home page', () => {
        let logo = browser.$('')
        logo.click()

    });

});
