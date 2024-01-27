/// <reference types = "Cypress"/>


describe("Verify Autocomplete dropdown list via webdriveruni", () => {

    //video 130 /131

    it("Select specific product via autocomplete list", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        // input the letter that we are search for (autocomplete) - uppercase A
        cy.get('#myInput').type('A')
        // we need to add selector to the droplist that is shown by the automcomplete
        // we will use #id and > * the arrow and  the asterix is a wild card refering to anything 
        // then use each to iterate inside the list
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            // create a producte const  and use the jquery to get the text
            // scanning and extracting the text of all the products
            const prod = $el.text();
            // for the food item which we want to select from the autocomplete test
            const productToSelect = 'Avacado';
            // Add if condition and by using 3 === means it is equal to
            if (prod === productToSelect) {

                //$el.click(); --> this jquery command to click on the element in the list
                
                // is not working as it is deprecated now 
                $el.trigger('click'); // -->  use wrap instead is better as i think cy.wrap($el).click();

           
                // click on submit button
                cy.get('#submit-button').click();
                // Assert on the URL that contains the selects item
                cy.url().should('include', productToSelect)
            }

            // -------- challenge 132 -133 -------  
            /* 1. type chacter g 
               2. select Grapes
               3. Assert on the URL that contains Grape
               4. Use then command to extend up on the existing test 
                         
          */
        }).then(() => {
            // we used here g lowercase
            cy.get('#myInput').type('g')
           
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                
                const prod = $el.text();
                const productToSelect = 'Grapes';
           
                if (prod === productToSelect) {
                    cy.wrap($el).click();
                    cy.get('#submit-button').click();
                    cy.url().should('include',productToSelect )  //  'test'
                }
           

        })
        


    })

})
})
