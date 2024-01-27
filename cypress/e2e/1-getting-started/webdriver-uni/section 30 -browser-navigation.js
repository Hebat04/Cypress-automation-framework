
/// <reference types="Cypress" />

// session 107/ 108 back, Forward, Reload

describe("Validate webdriveruni homepgae link", () => {

    it("Confirm links redirect to the correct pages", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // by removing attr we will use the remain tab
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        // to confirm that we are landing on the correct page so assert on contact us from the link 
        //https://www.webdriveruniversity.com/Contact-Us/contactus.html
        cy.url().should('include', 'contactus')

        // if we want back to the last page  cy.go() enables us to perform browser actions forward, ect.
        cy.go('back');
        // if we want to reload 
        cy.reload()
        //cy.reload(true) // --> reload without using  cache when we add the parameter true - (fresh load)
        // add another asseration to make sure that we are back  to the orginal homepage 
        // cy.url().should('include', 'https://www.webdriveruniversity.com/') --> i used equal instead of include 
        cy.url().should('equal', 'https://www.webdriveruniversity.com/')

        // if we want go foward
        cy.go('forward')
         // to confirm again that we are fowarded  to  the correct page so assert on contact us from the link 
        //https://www.webdriveruniversity.com/Contact-Us/contactus.html
        cy.url().should('include', 'contactus')
// if we Go back again to homepage,
        cy.go('back')
    //  we will be login to the login portal, so we need to use the same logic to can open the link in the same page 
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true })
        // Add assseration 
        cy.url().should('include', 'Login-Portal')
        cy.go('back') // go back to the homepage
    });
    
 // Session 109/ 110 - Challenge  

    it.only(" challenage Confirm links redirect to the correct pages", () => {
       // 1. Go to homepage 
        cy.visit("https://www.webdriveruniversity.com/")
       //2. Click on ToDo list button 
       /*  what is the difference between .click({ force: true }) and .click({ force: false })?
        , true it forces to click even if the button is not visiable
          false , Cypress will perform a standard click, honoring the visibility and interaction properties of the element. If the element is not visible or clickable, 
          Cypress will raise an error. and to ensure ur test use asseration EX: .should('be.visible') or .should('be.enabled') */
       cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true })
       //.should('be.visible')
       //3. Assert that the URL is landed on correct page 
       cy.url().should('include','To-Do-List')
       // added wait to see it while executiom 
       cy.wait(2000)    
        // 4.Then go back to Home Page
        
        cy.go('back')
      
       // adding asseration for the homepage
       cy.url().should('equal', 'https://www.webdriveruniversity.com/')
       
    });



});

