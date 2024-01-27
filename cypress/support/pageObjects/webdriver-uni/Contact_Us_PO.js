// Section 48 - Page Object Modelling 
// video 196 - part 3/6  PO = Page Object

class Contact_Us_Po{
    // we need to created a custom command(function )to use it different as page object 
    // we can use cypress command inside the page object classes

    contactForm_Submission (firstName, lastName, email, comment, $selector, textToLocate)  {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        //Section 49 - to can increase the asseration time by adding timeout 
        // thats mean this asseration will wait up to 60s and if it exceeds 60s this step will fail
        cy.get($selector).contains(textToLocate , {timeout: 60000});
        // we can chain the pause 
       // cy.get($selector).pause().contains(textToLocate);

        //Section 51 - video 206 we can add screenshots when ever we want to

      //  cy.screenshot(); // -> this one will use the default name  
       // cy.screenshot("make a contact us form submission") // --> this one will use the name given iside the quotes
    };



}
export default Contact_Us_Po;