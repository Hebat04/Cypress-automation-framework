/// <reference types = "Cypress"/>

describe('Check on products using custom commands', () => {

 beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    
 });

     // ********* section : 44 - Video 177 *********

   it("Add specific product to basket", () => {
  
    // call back our custom command
    cy.selectProduct('Curls to straight Shampoo');

  
})

// Video  178

it("Add another specific product to basket", () => {
    
    // we are selecting a new item by the same custom command
    cy.selectProduct('Seaweed Conditioner');

})

// Video 179 - 180 - challenage 

it("Add another specific  product to basket 2", () => {
    
    // we are selecting a new item by the same custom command
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');

})
    
});
   
  