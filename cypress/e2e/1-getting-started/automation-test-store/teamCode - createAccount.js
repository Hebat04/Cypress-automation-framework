/// <reference types="Cypress" />




describe("Create Account for user 1", () => {

    // coding together with the team

    it("01-05", () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/create");
        // cy.title().should('include','Create Account');
        cy.title().then((title) => {
            cy.log('title is:' + title);
        });


        // home work to show how we will use type , drop downs and checkboxes and variables

        // get the header text
        // 1st option 
        /* cy.get('h1 .maintext').then(($headerText) =>{
            const header = $headerText.text();
            cy.log("header : " + header)
        }) */

        // 2nd option using wrap and that makes the code use the object with cypress commands directly
        cy.get('h1 .maintext').then((headerText) => {
            cy.wrap(headerText).should('have.text', ' Create Account')

        })



        cy.log("page is displayeed");
        // 1.  type will not retrieve the input you must add invoke('val') and u must use val and if u want 
        // to retrieve text u must use invoke('attr')
        /* cy.get('#AccountFrm_firstname').type("Heba").invoke("val").then((name)=>{
            cy.log(" firstname: " + name + " is added" )
        }) */

        // 2. if u want to use another styple to retrieve input without using invoke , add any variable to tthis input with $ ($input)  and create a varibale to this input
        // I used --> $name amd it is working too
        cy.get('#AccountFrm_firstname').type("Heba").then(($name) => {

            const name = $name.val();
            cy.log(" firstname: " + name + " is added")

        })

        cy.get('#AccountFrm_lastname').then(lsName => {
            cy.get(lsName).type("Ismail");

        })


        // xpath : //*[contains(@class, 'form-group')]/label[contains(text(),'First Name:')]
        cy.xpath("//*[contains(@class, 'form-group')]/label[contains(text(),'Last Name:')]").then(label => {
            // using  Jquery text()
            const lstNameLabel = label.text();
            expect(lstNameLabel).to.contain('Last Name:')
            // embedded commands (closure)
            // we can use the label as it is the orginal variable that contain the xpath 
            // but we cannot use the lstNameLabel as it contain the text of the xpath so we can  make the asseration only using it
            //cy.xpath("//*[contains(@class, 'form-group')]/label[contains(text(),'Last Name:')]").then(lntxt =>{
            cy.log(label.text());

            // })

        })
        cy.log(" lastname is added")
        cy.get('#AccountFrm_email').type("Test@test.com")
        cy.log(" Email is added")
        cy.get('#AccountFrm_telephone').type("+1(888) 789 123")
        cy.log(" Telephone number is added")
        cy.get('#AccountFrm_fax').type('+1(999) 789 123')
        cy.log(" Fax number is added")
        cy.get('#AccountFrm_company').type('Boba\'s\ company')
        cy.log(" company is added")
        cy.get('#AccountFrm_address_1').type('1212 coding land')
        cy.log(" Address is added")
        cy.get('#AccountFrm_city').type('Automation')
        cy.log(" City is added")

       /*  cy.get('#AccountFrm_zone_id').select('Blaenau Gwent').invoke('is','selected').then(selected => {
            //const state = $state.text()
            // by text it returns all the text in this field with value returns the value not the text
            // Question how to get the text of this  option only ?? not the value 
            //const state = $state.val()
            const option = selected.text()
            cy.log(" Region/State: " + option + " is selected");
            /* All of them are not working */
       
       cy.get('#AccountFrm_zone_id').select('Fife').then(($text)=>{

        var option = $text.text()

        cy.log(" Region/State: " + option + " is selected."); 
       })
       
       
       

       


        })






    });
