/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    // Video / 156 - 157 - 158
    it("Calculate and assert the total age of all users", () => {
      // we will select all the td of the specific dev
      // we will iterate inside each cell in the table 
      // $list which is the entire list
      // then create an array 
      var userDetails = [];
       // Add another variable as a global variable
      let numb =0;
      cy.get('#thumbnail-1 td').each(($el, index, $list) => {
               // because in each iteration the index will be incremented 
               // then assign it to an element and get it to the index of the array by referencing the element & extracting the text
               userDetails[index]  = $el.text();
              
               //then we are going to extend to this code and add .then
      }).then(() => {
           // create another variable 
           var i;
           // then we will create loop and looking for all the data that is stored in the array
           for( i = 0; i < userDetails.length; i++){
            // when we are using i=1; jone in the first cell we cannot find it in the runner so we will change it to 0
            // then numb is qual or plus   useDetails , Number is checking if it is a number so it will be added to num
            // then create if statement with function number
                if(Number(userDetails[i])) { // if the if statement = to true as the element is a Number
                    numb += Number(userDetails[i])
                    // so numb wil calcualte the total age
                   // cy.log(userDetails[i]);

                   //cy.log("Found total age: " + numb); --> if put on this level it will fail as we still in index 0 which is string
                }    

           }
           // you habe to put the log after the then level as numb will be calculate ever then after the log is done 
           cy.log("Found total age: " + numb);
           // Add asseration to validate total number inside numb is equal to 322
           expect(numb).to.eq(322);
      })
    });
  
    // video 159 - 160
    it("Calculate and assert the  age of a given user based on last name", () => { 

        // tr = table row  - td = table data 
        // we will iterate in each last name
        // nth-child(2) -> get the child - 2 is index
     cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {

       const text = $el.text() // that will extract text of each element
       // add if statement and add logic to select last name - if the last name woods then we get the index
       if(text.includes("Woods")){
       // we get the index from the each and it will locate all the last name from second column
       // then go to the next element .then added then function add the data to age and then create another variable and assert on it
      cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
     // create variable to store the age text
        const userAge = age.text();
        expect(userAge).to.equal("80");

      })
       }

     })
        
    })
  });
  