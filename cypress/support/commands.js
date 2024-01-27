// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// created a template to file automatoon-test-store > iterate -over element
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
         // remove the product name in the following file and use the callback str
        //if ($el.text().includes('Curls to straight Shampoo')) {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click(); 
        }
    });
})

//-- contact us --
Cypress.Commands.add("webDriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="submit"]').click();
    // Asseration
    cy.get($selector).contains(textToLocate);
})


// Section 45 - Video 184 
// selector .fixed_wrapper .prdocutname highlights all teh products name 
Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
     
        if ($el.text() === productName) {
            cy.log($el.text())
            // locate the shopping cart and equal to index that is selected by loop and if  condition
           cy.get('.productcart').eq(index).click()
          
            
        }
    });
})

// Video 192 combine Dynamic URLs and Custom Commands
// we dont need to pass a parameter () after the command name
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage",() => {
    // will access to our global homePage baseUrl
   cy.visit("/");
});

// Video 193 : 
Cypress.Commands.add("navigateTo_WebdriverUni_checkBox_page",() => {
    // will access to our global homePage baseUrl
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
})

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })