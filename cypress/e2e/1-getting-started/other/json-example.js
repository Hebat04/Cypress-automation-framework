
/// <reference types="Cypress" />


describe("Json Object Examples", () => {

    it("Json Object Examples", () => {

        const exampleObject =  {
            // 1. we usually add the data within the curl bracket{""} then we added a key and value
            "key": "Tim", "key2": "Jones"
        }
        // 2. create an Array 
        const exampleArrayofValues = ["Sophie" , "Rose" , "Howard"] // Array of the values 

        // 3.combine the above methods together the normal data and Array of data 
        const users = {
            // this is the 1st approch likc exampleObject
            "firstName": "Joe" , 
            "lastName": "Blogs",
            // we can provide inside the Array strings or intger 
             "Age" : 30,
             // then we can add different set of data separting them by comma ,
             // by using the 2nd approach Arrays Ex: exampleArrayofValues
             "Students": [ // Array of objects 
                {
                    "firstName": "Jim" , 
                    "lastName": "Blogs2",
             },
             {
                "firstName": "Sarah" , 
                "lastName": "Parker",
             }
            ]

        }

        // this examples are the ways to extract values from objects 
        cy.log(exampleObject["key"]); // output tim
        cy.log(exampleObject["key2"]); // output jones
        cy.log(exampleObject.key2);

       // to call the data from array by index  , specify the name of the array + [] and inside it the index
        cy.log(exampleArrayofValues[0]) // output Sophie
        cy.log(exampleArrayofValues[1]) // output Rose 
        cy.log(exampleArrayofValues[2]) // output Howard

        // 3. Extract Data from the users constant or the combined object 

        cy.log(users.lastName) // out put Blogs ,this will extract the data from users directly it will not go inside students block
        // so to get data from the array inside students we need to work down on each level
        // Arrays use the index because first set of data = 0 , 2nd = 1 , etc..
        cy.log(users.Students[0].lastName) // output blogs 2 --> add 0 with students to extract the 1st block


      
    });

   

})




