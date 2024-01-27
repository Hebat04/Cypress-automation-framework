/// <reference types = "Cypress"/>

// ********* section : 45 - Video 183 *********
describe('Add multiple items to basket', () => {
    // initalize the data file 
    before(function() {
        cy.fixture("products").then((data) => {

            globalThis.data = data;
        })
      //  cy.fixture("products").as("product")

    });

    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    });

    it("Add specific items  to basket", () => {
   // video 185
        // add our custom command   
        //add fixture with the parameter in json file and forEach to iterate on the array inside the json file
       globalThis.data.productName.forEach((element) => {
       
       // globalThis.product.productName.forEach(function(element){
       // this.data3.productName.forEach((element) => {
            // then we passed our element to our custom command 
            cy.addProductToBasket (element)
        })

       
      
        // Add click to the cart o make sure the items are selected
        cy.get('.dropdown-toggle > .fa').click();



    })

});

