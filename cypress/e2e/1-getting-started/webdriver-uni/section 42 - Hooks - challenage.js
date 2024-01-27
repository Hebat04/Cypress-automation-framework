/// <reference types="Cypress" />


describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(() => {
   
        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })

        it("check and validate checkbox", () => {
    
            cy.get('input[value="option-1"]').as('1stInput')
            cy.get('@1stInput').check().should('be.checked') 

        })
    
       
        
        it("check and validate checkbox 3 is unchecked", () => {

            cy.get('input[value="option-3"]').as('3rdInput')
            cy.get('@3rdInput').uncheck().wait(2000).should('not.be.checked') 
    
        })
    
    
        it("check multiple check boxes", () => {
    
            cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).as('checkboxes')
            cy.get('@checkboxes').should('be.checked')
            cy.get('@checkboxes').uncheck().should('not.be.checked')
            
            
    
        })
    
    
    
        
    });

    


