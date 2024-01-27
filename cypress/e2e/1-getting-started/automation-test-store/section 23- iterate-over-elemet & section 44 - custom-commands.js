
/// <reference types="Cypress" />


describe("Iterate over elements ", () => {


    // Videos 91/92
    it.skip("Log information of all hair care products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        // copy the code from https://docs.cypress.io/api/commands/each#Examples --> Examples sectiom DOM elements
        //.fixed_wrapper .prdocutname --> is selector to find all the elements inside it 

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // .each to iterate inside the elements in the given selector which will include 4 elements
            //.text() --> performaning Jquery to extract the text
            //$el = each elements
            // command index to give us the index of each iteration 
            cy.log("Index: " + index + ": " + $el.text())
        })

    });
    // video -91 - 92 - 

    it.skip("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // we need to create if logic to interact with the elements if they met the conditions
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // if one of those headers contains this header
            if ($el.text().includes('Curls to straight Shampoo')) {
                // add the logic 
                /* we can  use the following code as it is Jquery but we are building cypress so we need u use cypress commands
                $el.click();
            */
                //cy.wrap allows us to use cypress commands
                //$el.click();
                cy.wrap($el).click();
                
            }


        });
    })

    // ********* section : 44 - Video 177 *********

    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        // call back our custom command from the file  commands.js
        cy.selectProduct('Curls to straight Shampoo');

      
    })

    // Video  178

    it("Add another specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        // we are selecting a new item by the same custom command from the file  commands.js
        cy.selectProduct('Seaweed Conditioner');

      
    })

    // Add on the following TCs 

    it.skip("fetch some data using nested promises - closure", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.wait(2000).then(()=>{
            fetch("https://www.automationteststore.com/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            }).catch("error msg")
            
        })
        cy.log("Test is completed")

      

    });



});




