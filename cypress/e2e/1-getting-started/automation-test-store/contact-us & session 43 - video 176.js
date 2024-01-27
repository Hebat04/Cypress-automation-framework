
// add the following code line with the 3 fore slashes /// to can activate cypress cy. without it , it will not work
/// <reference types="Cypress" />
// add the following code line with the 3 fore slashes /// to can activate cypress with xpath  it will not work
//--> /// <reference types="cypress-xpath" />

describe("Test Contact US from via Automation Test Store", () => {
 
// add file regarding to ******session 43 - Video 176 *****
 // create alias  user to the file
 before(() => {
  cy.fixture('userDetails').as('user')

 })


  // Adding comma to handle the call back then () =>
  // now we will define specific test
  it.only("Should be able to sumbit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    //cy.get('.info_links_footer > :nth-child(5) > a').click();
    // we will use improved css selector $ will include everything after href
    cy.get("a[href$='contact']").click().then(function (linkText) {
      // add then and console .log (to see the logs in the HTML) and add the variable .text() to get the text of the object using Jquery
      //console.log("Element is clicked successfully " + linkText.text())
      // add cy.log to see it in cypress runner
      cy.log("Element is clicked successfully " + linkText.text())

    });

    console.log("Element is clicked successfully ")

    // Video 176 
    // create the following promise
    cy.get('@user').then((user) => {
      cy.get('#ContactUsFrm_first_name').type(user.first_name);
      cy.get('#ContactUsFrm_email').type(user.email);
    })

   /*  cy.get('#ContactUsFrm_first_name').type("Heba");
    cy.get('#ContactUsFrm_email').type("test@test.com"); */
    // Add asseration to email field 
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');


    cy.get('#ContactUsFrm_enquiry').type("Hi there i have inquiry");
    // Use the css selector instead to create selector with id 
    cy.get('[id="ContactUsFrm_enquiry"]').type("Hi there i have inquiry");
    // or use the xpath 
    //cy.xpath("//*[@id='ContactUsFrm_enquiry']").type(" Hi there i am here");

    //cy.get('.col-md-6 > .btn').click();
    // use the css selector instead of the selector recommended by Cypress itself
    cy.get('button[title="Submit"]').click();
    //cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    //  - use the xpath - 

    cy.xpath("*//p[text() ='Your enquiry has been successfully sent to the store owner!']").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    console.log("Test is completed!")
    cy.log("Test is completed!")

  });


});

