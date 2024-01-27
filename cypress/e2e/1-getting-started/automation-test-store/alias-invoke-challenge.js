/// <reference types="Cypress" />


/* Challenge 
1. Use Alias and invoke to validate the number of products
2. count the number of products on the home page - with div thumbnail to validate the length of 16 
3. select the productcart and assert the title cart  */

describe("Alias and invoke challenge ", () => {

    it("Count the number of products of the home page", () => {
        cy.visit("https://automationteststore.com/");
        // create Alias (variable )to the products class
        cy.get('.thumbnail').as('productsOnHomePage')
        //Assert on the length of the products using the created alias @
        cy.get('@productsOnHomePage').should('have.length', 16)
        /* Assert on the attr = title using the same alias , 
        search  with find menthod inside the alias on another class which will include the attr
        invoke the attr and then assert on it  */
        cy.get('@productsOnHomePage').find('.productcart').invoke('attr', 'title').as('cartTitle').should('include','Add to Cart')
      
        
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('is','selected').as('itemPrice')
        cy.get('@itemPrice').then($linkText => {
// var itemTotalPrice
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                // to covert strings to numbers
                //itemTotalPrice +=  Number(itemPrice[i])
            }
        })
      });


     



    });






   

