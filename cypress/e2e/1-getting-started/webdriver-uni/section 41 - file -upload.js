/// <reference types="Cypress" />

describe('Test File Upload via webdriveruni', () => {


    it('Upload a file ...', () => {
       cy.visit('https://www.webdriveruniversity.com/');
       cy.get('#file-upload').invoke('removeAttr', 'target').click({force : true});
        // selectFile that already added to fixtures folder
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click();
        // Added asseration
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Your file has now been uploaded!')
        })

        
    });

    it('Upload No file ... ', () => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force : true});
        cy.get('#submit-button').click();
        // added asseration
        cy.on('window:alert',(str) => {
         expect(str).to.equal('You need to select a file to upload!')
        })
    });
    
});