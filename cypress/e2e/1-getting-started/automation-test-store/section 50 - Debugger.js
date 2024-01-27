// import the file
import AutoStore_Homepage_Po from "../../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_Po from "../../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types = "Cypress"/>

// ********* section : 50 - Video 205 - debugger *********
describe('Add multiple items to basket', () => {
    const autoStore_HomePage_PO = new AutoStore_Homepage_Po();
    const autoStore_HairCare_PO = new AutoStore_HairCare_Po();

    // initalize the data file 
    before(function() {
        cy.fixture("products").then((data) => {

            globalThis.data = data;
        })


    });

    beforeEach(() => {
       /*  cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); */
        autoStore_HomePage_PO.accessHomepage();
        autoStore_HomePage_PO.clickOn_HairCare_Link();

    });

    it("Add specific items  to basket", () => {
  
      // use the function from the autoStore_HairCare_PO
      // section 50 - Add debugger to the logic go to Page object and u can see it
      autoStore_HairCare_PO.addHairCareProductToBasket();



    })

});

