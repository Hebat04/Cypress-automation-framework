/// <reference types = "Cypress"/>


describe("Interact with dropdown lists  via webdriveruni", () => {

    //video 126 /127
    
      it("Select specific values via select dropdown list", () => {
    
            cy.visit("https://www.webdriveruniversity.com/")
            // get the id of the page 
            cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
           
        // we are getting her the drop down menu locator and then use select with value or text 
            cy.get('#dropdowm-menu-1').select('c#')
            // add asseration with should (have.value)
            cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng')
            //cy.get('#dropdowm-menu-3').select('jquery') // value is lowercase in the html
            // use another asseration with contains with the text
            cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
            
// challenge videos 128/129

        //1. Add to the existing 
        //2. interact with 2nd droplist select maven based on value and TestNG based on Text
        //3. Assert on both 
            cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
            cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    
        })

             
    
        })


      
      



