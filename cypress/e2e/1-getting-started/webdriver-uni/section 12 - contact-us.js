
// add the following code line eith the 3 fore slashes /// to can activate cypress cy. without it , it will not work
/// <reference types="Cypress" />


describe("Test Contact US from via WebdriverUni", () => {

    

// Adding comma to handle the call back then () =>
    // now we will define specific tes
    it("Should be able to sumbit a successful submission via contact us form", () => {
        // Adding comma to handle the call back 
        // Cypress code then - postive scenario - 
        // will use this link to test : https://www.webdriveruniversity.vcom/

         //cy.visit("https://www.webdriveruniversity.com/") --> with these 2 code links cypress cannot handle the multiple browser
         //cy.get('#contact-us > .thumbnail > .section-title > h1').click()
         cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
         // assert on the HTML document 
         cy.document().should('have.property','charset').and('eq','UTF-8');
         cy.title().should('include','WebDriver | Contact Us')
         // assert on the url
         cy.url().should('include','contactus.html')

         cy.get('[name="first_name"]').type("Heba");
         cy.get('[name="last_name"]').type("Ismail");
         cy.get('[name="email"]').type("test@test.com");
         cy.get('textarea.feedback-input').type("Hi there can you check my problem");
         cy.get('[type="submit"]').click();
         // Add asseration to the pass scenario
         //cy.get('h1').should('have.text','Thank You for your Message!');
        cy.xpath("//*[contains(text(),'Thank You for your Message!')]")
         .should('have.text','Thank You for your Message!'); 


    });
   
   it("Should not be able to sumbit a successful submission via contact us form as all fields are required", () => {
    // -->  by adding .only to it --> it will target specific scenario of TC only 
    //it.only ("Should not be able to sumbit a successful submission via contact us form as all fields are required", () => {
        // Adding comma to handle the call back 
         // Cypress code then - negative scenario - 
         cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
         cy.get('[name="first_name"]').type("Heba");
         cy.get('[name="last_name"]').type("Ismail");
         // will remove the emuil code step
         cy.get('textarea.feedback-input').type("Hi there can you check my problem");
         cy.get('[type="submit"]').click();

        // Add asseration  with all the following methods
         cy.xpath("*//body").contains('Error');
        //should('have.text','\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n');
        // Add asseration using contains
        //cy.get('body').contains('Error: all fields are required');
        });
});

