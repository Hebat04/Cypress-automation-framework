/// <reference types="Cypress" />

describe("Handle Js Alerts", () => {

    // Section 31 - session 112 /113
    it("Confirm js alert contains the correct text", () => {

        /*  in this test we are going to use the Home page URL and then direct us to the contact us URl without adding 
            the contact us URL page 
          cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
       */
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        //cypress automatically  handle the alerts 
        cy.get('#button1').click();
        // so here we tell cypress i want to handle this alert manually , use cy.on('window:alert') and thn add parameter
        // in the call back 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')

        })



    });
    // how to handle button with alert that has 2 buttons Ok and cancel

    it("Validate js confirm alert box works when clicking Ok ", () => {

        /*  in this test we are going to use the Home page URL and then direct us to the contact us URl without adding 
            the contact us URL page 
          cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
       */
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        //cypress automatically  handle the alerts 
        cy.get('#button4').click();
        // how to handle button with alert that has 2 buttons Ok and cancel
        // the following is event block
       /*  cy.on('window:alert', (str) => {
            return true;
        }) */
// if we return true it will clicks ok but it cannot handle the cancel in that situation better to use window:confirm
        
        cy.on('window:confirm', (str) => {
            return true;
        })
// Add asseration that the msg is displayed
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    });

                // ---- challenage - sessions 114 / 115 -------- //

   // 1. create new test 
     it('Validate js confirm alert box works when clicking cancel  ',() => {
    
      cy.visit('https://www.webdriveruniversity.com/')
      //2. Go to JavaScript Confirm Box in page pop and alerts
      cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
      //3. Click on Click me 
      cy.get('#button4').click()
      //4. Click on cancel in the alert 
      // here will use window:confirm instead of window: alert as window:alert cannot handle the cancelation
      cy.on('window:confirm',(str) => {
          return false;
      })
      //5. Assert on the cancelation  message 
      cy.get('#confirm-alert-text').contains('You pressed Cancel!');

     })

   // session 116 - Handling Alerts with stubs
     it.only('Validate js confirm alert box using a stub',() => {
    
        cy.visit('https://www.webdriveruniversity.com/')
        //2. Go to JavaScript Confirm Box in page pop and alerts
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force: true})
        // we need to setup a stub 
        const stub = cy.stub()
        // Align the stub with an event
        cy.on('window:confirm',stub)

        cy.get('#button4').click().then(() => {
      // stub is used as storage and it had nothing now so it contains 0 or the index 0 and assert on the msg
      // validate if the value stored in the stub is same as the message 
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            // we also add another promise to handle the call back 
        }).then(() => {
            // to ensure we click on OK 
              return true 
        // and also we can add another then to assert on the correct msg after clicking on OK 
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')

        })
        
       
     })


});