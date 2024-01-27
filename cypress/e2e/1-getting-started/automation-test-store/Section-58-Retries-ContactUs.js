/// <reference types="Cypress" />

describe("Test Contact US from via Automation Test Store", () => {
 
     before(() => {
      cy.fixture('userDetails').as('user')
    
     })
    
    // Video 229 Add retry logic to tests Add {}, to it block
      it("Should be able to sumbit a successful submission via contact us form", {
        // Add retries 
        retries:{
          runMode: 2,
          openMode: 2
  
        }
      
      }, () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']555clea").click().then(function (linkText) {
          cy.log("Element is clicked successfully " + linkText.text())
    
        });
    
        console.log("Element is clicked successfully ")

        cy.get('@user').then((user) => {
          cy.get('#ContactUsFrm_first_name').type(user.first_name);
          cy.get('#ContactUsFrm_email').type(user.email);
        })
    
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    
    
        cy.get('#ContactUsFrm_enquiry').type("Hi there i have inquiry");
        cy.get('[id="ContactUsFrm_enquiry"]').type("Hi there i have inquiry");
        cy.get('button[title="Submit"]').click();
        cy.xpath("*//p[text() ='Your enquiry has been successfully sent to the store owner!']").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        console.log("Test is completed!")
        cy.log("Test is completed!")
    
      });
    
    
    });
    
    