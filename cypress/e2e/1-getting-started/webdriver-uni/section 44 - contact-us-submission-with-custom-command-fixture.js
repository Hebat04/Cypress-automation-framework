/// <reference types="Cypress" />

// Videos 181 - 182 
// --> created custom command contact us under support > commands.js

describe("Test Contact US from via WebdriverUni", () => {
    before(function () {

        cy.fixture('example').then(function (data) {
            globalThis.data = data;

        })
    })

    it("Should be able to sumbit a successful submission via contact us form", () => {
    
         cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      
         cy.document().should('have.property','charset').and('eq','UTF-8');
         cy.title().should('include','WebDriver | Contact Us')
         cy.url().should('include','contactus.html')

       /*   cy.get('[name="first_name"]').type("Heba");
         cy.get('[name="last_name"]').type("Ismail");
         cy.get('[name="email"]').type("test@test.com");
         cy.get('textarea.feedback-input').type("Hi there can you check my problem");
         cy.get('[type="submit"]').click();
         cy.get('h1').should('have.text','Thank You for your Message!'); */
         // use the data from the fixture json file that is already added to before hook 
         // ex: data.first_name will go to custom command and replace hhe parameter firstName
         //cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, comment, $selector, textToLocate );
         cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "Hi there can you check my problem", "h1", "Thank You for your Message!");
   


    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("http://www.webdriveruniversity.com")
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      // cy.get('[name="first_name"]').type(data.first_name);
      // cy.get('[name="last_name"]').type(data.last_name);
      // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      // cy.get('[type="submit"]').click();
      // cy.get('body').contains('Error: all fields are required');
      cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
  });
 

});

