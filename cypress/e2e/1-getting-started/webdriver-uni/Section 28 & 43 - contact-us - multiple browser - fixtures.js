describe("Test Contact US from via WebdriverUni", () => {

    // ------- section 43 - Video 174 / 175  --------
    //add before test --> before and add the path fixtures file by adding only the name
    // then add .then and data .
    // this.data = data --> to initalize the date but may be not working use instead  globalThis.data = data;


    before(function () {

        cy.fixture('example').then(function (data) {
           // this.data = data; // some time it is not working to extract data 
            // if the above line of code doesn't work you can use the following
            globalThis.data = data;

        })
    })

    // Section 28 - Multiple bbrowser 

    // Adding comma to handle the call back then () =>
    // now we will define specific tes
    it("Should be able to sumbit a successful submission via contact us form", () => {

        /*  in this test we are going to use the Home page URL and then direct us to the contact us URl without adding 
            the contact us URL page 
          cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
       */

        cy.visit("https://www.webdriveruniversity.com/")
        // so we need to use the JQuery remove attrbiute , click({force:true}) will not work probebly alone 
        // So we need to add invoke ('removeAttr; , 'target') --> target is from the html beside the a href link 
        // so with this work around we can handle the multiple browser

        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us')
        // assert on the url
        cy.url().should('include', 'contactus.html')
        // section 43 - Fixtures --> we will change the Heba as first name bu data.firstname and all the other data that will be extracted from the file under fixtures
        //cy.get('[name="first_name"]').type("Heba");
        cy.get('[name="first_name"]').type(data.first_name);
        //cy.get('[name="last_name"]').type("Ismail");
        cy.get('[name="last_name"]').type(data.last_name);
        //cy.get('[name="email"]').type("test@test.com");
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Hi there can you check my problem");
        cy.get('[type="submit"]').click();
        // Add asseration to the pass scenario
        cy.xpath("//*[contains(text(),'Thank You for your Message!')]")
            .should('have.text', 'Thank You for your Message!')
    });


    it("Should not be able to sumbit a successful submission via contact us form as all fields are required", () => {

        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

        //cy.get('[name="first_name"]').type("Heba");
        cy.get('[name="first_name"]').type(data.first_name);
        //cy.get('[name="last_name"]').type("Ismail");
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("Hi there can you check my problem");
        cy.get('[type="submit"]').click();
        cy.xpath("*//body").contains('Error');

    });

});