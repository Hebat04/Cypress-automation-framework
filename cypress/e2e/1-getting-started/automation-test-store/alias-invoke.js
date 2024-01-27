
/// <reference types="Cypress" />


describe("Alias and invoke ", () => {

    // Section 24

    it("Validate a specif hair care product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        // eq(0) to get the index 0 
        //invoke cypress command to extract the text --> the 1st header of index 0
        // as (Alias command) to declare it as a variable  , reduces code and we can resuse it simply 
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        // when you use alias you have to use @ to call it
        // .its('length'): its method accesses the length property of the subject (elements matched by the alias). 
        // should to assert use be  , gt = Abbrevation of greater than  and then add the number 5
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        //Should include to assert on the text 
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    });


    /*  ***Challenge***
    1. Use Alias and invoke to validate the number of products
    2. count the number of products on the home page - with div thumbnail to validate the length of 16 
    3. select the productcart and assert the title cart  */
    it("Count the number of products of the home page", () => {
        cy.visit("https://automationteststore.com/");
        //1. create alias to the elements so you can call them many times //
        cy.get('.thumbnail').as('productthumbnail')
        // 2. Assert on the length of the products in the homepage //
        cy.get('@productthumbnail').should('have.length', 16)
        // 3. Assert on the attr title of the productcart that is included in the same alias //
        /*  use the same alias with find to search inside the thumbnail class about this child class
        we need to invoke the attr -> title */
        cy.get('@productthumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')



    });


    // Section 25: combining Alias, Invoke, Variables & Iterating Through Data

   it.only("Calculate total of normal and sale products", () => {   
        cy.visit("https://automationteststore.com/");
        //cy.get('.thumbnail').as('productthumbnail')
        //2. we want to calculate the products with normal price only.
        /*  cy.get('@productthumbnail').find('.oneprice').each(($el, index, $list) => {  
              /* 1.add .find to search inside the element on the class of the price
                 2. each to iterate on each element   
                 3. if we used jQuery $el.text() to will get all the prices
             cy.log($el.text());
             }); */
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        // create another alias to sale item price
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
          // .find same as the above logic to seach inside the element to get the price of items with normal price only
        //.invoke to get the text of the price 
        //as to create alias or variable from this price of item
        //. create a global variable and set it to zero 
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText =>{
            // create  a varal to add all the price to it 
            var itemPriceTotal = 0 
            // if u remove $ inside the split it will split each character
            var itemPrice = $linkText.split('$');
             // .then to call back the price
            // we will create an array to store all these values
            var i;
            // i = will be the index 
            // then create a for loop
            // this logic iterates through each of the indexes of our array and till it  maxes it out
            for(i=0; i < itemPrice.length; i++){

                cy.log(itemPrice[i])
                 // we need to add each number to our total , Use the Number from Java script , it is convert any string to a Number
                 // it iterates each number to the var
                 itemPriceTotal += Number(itemPrice[i])
            }

            // add all the normal sale to our itemsTotal 
            itemsTotal += itemPriceTotal;
            // to make sure log the number 
            cy.log("Non sale price items total: " + itemPriceTotal)
        })

        // we will add a similar logic to the sale item to cacualate the price of each on Sale items
        // we will not repeat the golobal variable as it is already global and we can reuse it inside the next block
         

        cy.get('@saleItemPrice').then($linkText =>{
            // create  a varal to add all the price to it 
            var SaleItemPriceTotal = 0 
            // if u remove $ inside the split it will split each character
            var saleItemPrice = $linkText.split('$');
             // .then to call back the price
            // we will create an array to store all these values
            var i;
            // i = will be the index 
            // then create a for loop
            // this logic iterates through each of the indexes of our array and till it  maxes it out
            for(i=0; i < saleItemPrice.length; i++){

                cy.log(saleItemPrice[i])
                 // we need to add each number to our total , Use the Number from Java script , it is convert any string to a Number
                 // it iterates each number to the var
                 SaleItemPriceTotal += Number(saleItemPrice[i])
            }

            // add all the normal sale to our itemsTotal 
            itemsTotal += SaleItemPriceTotal;
            // to make sure log the number 
            cy.log("sale price items total: " + SaleItemPriceTotal)
        })

        // we will assert it the logic is calculating correctly or not using the global variable
        .then(()=> {

            // 1st log the items of the total global variable
           cy.log("The total price of all products: " + itemsTotal)
           expect(itemsTotal).to.equal(660.5)
        })




    }); 


})
