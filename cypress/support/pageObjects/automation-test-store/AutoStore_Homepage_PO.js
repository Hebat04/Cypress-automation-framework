// Section 48 - Page Object Modelling 
// video 198  PO = Page Object

class AutoStore_Homepage_Po{
    // Add function
    accessHomepage(){
        cy.visit("https://www.automationteststore.com/")
    }


   // Add function 2
   clickOn_HairCare_Link(){
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();


   }

}
export default AutoStore_Homepage_Po;