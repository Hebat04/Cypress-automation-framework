
/// <reference types="Cypress" />



describe("Verifying variables, cypress commands and jquery commands", () =>{

        it("navigating to specific product pages", () => {
            cy.visit("https://www.automationteststore.com/");
           // to create variable use constant -=const 
           // adding contains to the following locator to check specific text
           // the order of the variable and action is very important so this code will fail
           
          /*  const  makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
           const  skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");

           // Use the varible we create and use the cypress command with it
           makeupLink.click();
           skincareLink.click(); */
   
/* 
            // this code will pass however it is not recommended
            const  makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
            makeupLink.click();
            const  skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
            // Use the varible we create and use the cypress command with it
            skincareLink.click(); */

            //Recommended Approach
            cy.get("a[href*='product/category&path=']").contains("Makeup").click();
            cy.get("a[href*='product/category&path=']").contains("Skincare").click();


        });

        // Videos 86 & 87

        it.only("navigating to specific product pages", () => {
            cy.visit("https://www.automationteststore.com/");
            cy.get("a[href*='product/category&path=']").contains("Makeup").click();
          /*   following code will fail
          const header = cy.get("h1 .maintext");
            cy.get(header)
            // or  use the Jquery
            cy.get(header.text()) */
            
         // the code will pass as we are using cypress protocol (Standard cypress approach) --> promises , then commends
         cy.get("h1 .maintext").then(($headerText) => {
            // we are passing through then to the following code 
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)

            /* Add asseration here expect().is.eq()
            here also you can see how the cypress is working asynchronously!
            the asseration is executed before the log however it is written after it */
            expect(headerText).to.eq('Makeup')

         })

        });

        it("Validate properties of the contact us page", () => {
            cy.visit("https://automationteststore.com/index.php?rt=content/contact");
            // cypress commands and chaining
             // here we can make 2 checks 1st check on this ID and then 
             // inside this id check the following header
             // then find the element inside field_11
             // then the field should contain the following text
          cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11')
            // if u need to check the asseration is working probebly u can add 1 to .should('contain', 'First name:1');
           .should('contain', 'First name:');

            // Jquery Approach - return the promise
            cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
                // find here is a Jquery
                const firstnameText = text.find('#field_11').text();
                // add asseration to make sure we see the right text
                // and to make sure from the asseration to.contain('First name:2')
                expect(firstnameText).to.contain('First name:')

                //Embedded commands(Closure)
                cy.get('#field_11').then(fntxt =>{

                    cy.log(fntxt.text());
                })
            })

        
       
    });
});