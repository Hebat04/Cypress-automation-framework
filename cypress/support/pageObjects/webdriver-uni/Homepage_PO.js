// Section 48 - Page Object Modelling 
// video 194  PO = Page Object

class HomePage_Po{
    // Add function
    visitHomePage(){
        // use the env variable we added to Cypress.config file
        // Section 49 - video 200  (60000 -> 60 seconds = 1 min ) - is an explicit timeout .
        // here we are overriding the pageloadtimout in the config file
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout : 60000}) 
    }

    // create a new command to click on contact us link 
    clickOn_ContactUs_button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, {timeout: 2000}) // the following click command will have timeout

    }



}
export default HomePage_Po;