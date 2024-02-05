
import HomePage_PO from "../../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../../support/pageObjects/webdriver-uni/Contact_Us_Po";
/// <reference types="Cypress" />



describe("Test Contact US from via WebdriverUni", () => {

    Cypress.config("defaultCommandTimeout" , 2000)
    const homepage_Po = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function () {

        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
  
        homepage_Po.visitHomePage();
        homepage_Po.clickOn_ContactUs_button();
 


    });

    // This TC will run on any browser 

    it("Should be able to sumbit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus.html')

        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hi there can you check my problem", "h1", "Thank You for your Message!");


    });
    // This TC will run only if the browser is firefox

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //Video 239 - Add browser to test logic 
        if(Cypress.isBrowser('firefox')) {
         
            // this part will be skipped if any other browser is ruunig 
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
        }
      

    });


});

