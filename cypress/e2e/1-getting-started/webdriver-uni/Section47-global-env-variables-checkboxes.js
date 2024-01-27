/// <reference types="Cypress" />

// Videos 189
// Create environment variables using cypress.config.js file 

describe("Test Contact US from via WebdriverUni", () => {
    before(function () {

        cy.fixture('example').then(function (data) {
            globalThis.data = data;

        })
    })

    /* beforeEach(() => {
        // you have 2 options either to use the concatenation or set the url as env variable Cypress.en
        //cy.visit("/" + "/Contact-Us/contactus.html");
       
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
    });

    it("Should be able to sumbit a successful submission via contact us form", () => {

        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus.html')

        // we are using here custom command + fixture file 
        // new for section 47 remove the data.first_name that comes from fixture file and use the global env variable from file cypress.config 
        cy.webDriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hi there can you check my problem", "h1", "Thank You for your Message!");

    });

    it("Should be able to sumbit a successful submission via contact us form", () => {
    
        cy.document().should('have.property','charset').and('eq','UTF-8');
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus.html')
        cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "Hi there can you check my problem", "h1", "Thank You for your Message!");
  


   });
 */

    // Video 190 
    // Add baseUrl  inside in the config file :

    // Video 192 combine Dynamic URLs and Custom Commands
    beforeEach(() => {
        // we are using the custom command from support >  commands.js 
        //cy.navigateTo_WebdriverUni_Homepage();

        // Video 193 use the custom command to go directly to the chechbox page
        cy.log(Cypress.env("name")) // --?> read from config file or custom configuration file
        cy.navigateTo_WebdriverUni_checkBox_page();
       // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        
    });

    it("check and validate checkbox", () => {

        //cy.visit("https://www.webdriveruniversity.com/") -> instead of this line use the following
        /* cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true }) */
        cy.get('input[value="option-1"]').as('1stInput')
        cy.get('@1stInput').check().should('be.checked')


    })


    it("check and validate checkbox 3 is unchecked", () => {

        //cy.visit("https://www.webdriveruniversity.com/")
       /*  cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true }) */
        cy.get('input[value="option-3"]').as('3rdInput')
        cy.get('@3rdInput').uncheck().wait(2000).should('not.be.checked')

    })


});

