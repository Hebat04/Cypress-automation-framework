// import files and .. upper level 
import HomePage_PO from "../../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../../support/pageObjects/webdriver-uni/Contact_Us_Po";
/// <reference types="Cypress" />

// videos 196 - 197

describe("Test Contact US from via WebdriverUni", () => {
    // Section 49 - Video 201 the following explicit timeout is for this overriding
    // the Cypress config file commandtimeout that is only for this Test suie
    Cypress.config("defaultCommandTimeout" , 2000)
    const homepage_Po = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function () {

        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        // create object from  HomePage_Po() to can call the functions from it 
        //   --> remove from here at add it to the main describe block 
        homepage_Po.visitHomePage();
        homepage_Po.clickOn_ContactUs_button();
        // video 203 - pause
       // cy.pause()


    });

    it.skip("Should be able to sumbit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus.html')

        //  call the function here from Contact_Us_Po();
        // const contact_Us_PO = new Contact_Us_Po(); --> remove from here at add it to the main describe block 
        // call the function from Contact_Us_Po() class and add the paratemers to it 
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hi there can you check my problem", "h1", "Thank You for your Message!");


    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // const contact_Us_PO = new Contact_Us_Po(); --> remove from here at add it to the main describe block 
        // call the function from Contact_Us_Po() class and add the paratemers to it 
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');

    });


});

