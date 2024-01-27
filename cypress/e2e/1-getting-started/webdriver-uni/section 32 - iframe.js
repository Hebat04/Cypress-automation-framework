/// <reference types="Cypress" />

//videos 117/118
describe("Handling IFrame & Modals", () => {
    // we are going to interact with Modals via the iframe itself

    it.only("Handle webdriveruni iframe and modal", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#frame').then($iframe => {
            // create const and using in the iframe callback and then get the content and find the body
            const body = $iframe.contents().find('body')
            // wrapping our results so we can using cypress commands against it 
            // then we are creating an alias for iframe
            cy.wrap(body).as('iframe')
        })
        // use the alias and create a selector to the element you want to interact with inside the iframe
        // why we can use the cyoress command .click because we wrapped the results in the above promise
        cy.get('@iframe').find('#button-find-out-more').click()
        // create alias for the modal (popup inside the iframe) to can add actions and validations 
        cy.get('@iframe').find('#myModal').as('modal')
        // we grapped our model and stored the text in a const
        cy.get('@modal').should(($expectedText) => {
            // we are using the jquery to extract the text of the Modal
            const text = $expectedText.text()
            // include --> we can add the whole text or part of the text
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');

            /* expect().to.equal is working as the  alias : find('#myModal').as('modal')
             here is representing the whole model and if u dig u can find
             inside it also 2 buttons so it is not logic to pass when we adding equal 
             expect(text).to.equal('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
             */
        })

        // get the alias of the modal and if it contains the following text , then click , i added wait to see it in the runner
        cy.wait(2000)
        cy.get('@modal').contains('Close').click()
    });

});

