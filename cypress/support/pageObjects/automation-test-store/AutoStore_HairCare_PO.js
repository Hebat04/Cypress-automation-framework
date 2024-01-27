// Section 48 - Page Object Modelling 
// video 199  PO = Page Object

class AutoStore_HairCare_Po{
    // Add function
   addHairCareProductToBasket() {
    globalThis.data.productName.forEach((element) => {
// add debugger section 50
        cy.addProductToBasket (element).then(() => {

            //debugger
        })
    })
  
    // Add click to the cart o make sure the items are selected
    // Section 50 to add shorthand .debug , chain our code and add debug directly to it
    //cy.get('.dropdown-toggle > .fa').click();
    cy.get('.dropdown-toggle > .fa').click().debug();

   }

}
export default AutoStore_HairCare_Po;