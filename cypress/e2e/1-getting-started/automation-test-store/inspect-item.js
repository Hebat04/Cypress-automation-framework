
/// <reference types="Cypress" />


describe("Inspect Automation Test store items using chain of commands", () =>{

    // same text case with different chain commands 

        it("Click on the first item header", () => {
            cy.visit("https://www.automationteststore.com/");
            cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    
        });
       
      
        it.only("Click on the first item item text", () => {
            cy.visit("https://www.automationteststore.com/");
            // use the common class .prodcutname from the selector recommended by cypress
            //(('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'))that is used in all the HTML products 
            // in the page and inspect in the HTML as some times the HTML wording is 
            // different from what is seen in the UI webpage 
            
            cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
                // then to have the power to can organize the non cypress commands
                //.text from jquery
                // console. log not cypress command
                 console.log("Selected the following item "+itemHeaderText.text )
                 
            });

    
        });


        it("Click on the first item item index", () => {
            cy.visit("https://www.automationteststore.com/");
            // we use use the upper level class and search inside it and find the next class --> this another chain command
            // then .eq (0) to add the index and then click on the item. and the index starts from 0
            //(('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'))
            cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
           
          
     
            
    
        });
    });
    
    