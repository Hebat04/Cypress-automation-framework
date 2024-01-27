/// <reference types="Cypress"/>

describe('Hooks', () => {
    // Video 169

    // All the Hooks must be listed inside the describe block 
    before(() => {
        // runs once before all tests in the block
        cy.log('runs once before all tests in the block');
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log('runs before each test in the block');
    })

    afterEach(() => {
        // runs after each test in the block
        cy.log('runs after each test in the block');
    })

    after(() => {
        // runs once after all tests in the block
        cy.log('runs once after all tests in the block');
    })

    it('Example Test 1', () => {
        cy.log('Example Test 1')
        
    });

    it('Example Test 2', () => {
        cy.log('Example Test 2')
        
    });

})