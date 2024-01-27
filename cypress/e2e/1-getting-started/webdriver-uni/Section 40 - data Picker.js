/// <reference types="Cypress" />

describe("Test Datepickervia webdriveruni", () => {

  // Video / 161 - get the current date and a future day 
  it("Select date from the datepicker", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    // create  vriable to get the date
    // let can not be declared 2 times but var can 
    let date = new Date();
    // it will get the current date .getDate() , setdate to select it 
    date.setDate(date.getDate());
    // add additional date to our logic 
    cy.log(date.getDate()); // get the current date ex: 21

    let date2 = new Date();
    date2.setDate(date2.getDate() + 5)
    cy.log(date2.getDate()); // get the current date ex: 21 + 5 = 26

  })

  //Video /  162 -  Add on to date to get the additional dates 
  it('Select future day, month and year via wevdriver', () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    // Get current year and next year
    var date = new Date();
    date.setDate(date.getDate() + 1) //EX: if today is 21 so will get tomorrow which is 22
    // create year and month , so add logic to get the year

    var futureYear = date.getFullYear() +1 ; // ex: 2022 if we add 360 we will select the same date in 2023
    var futureMonth = date.toLocaleString('default', { month: 'long' }) // --> this will correctly format the month for us 
    var futureDay = date.getDate(); //--> to get the future date

    cy.log('Future Year to select:' + futureYear);
    cy.log('Future month to select:' + futureMonth);
    cy.log('Future Day to select:' + futureDay);


  })

  // Video 163 - 164 - 165 

  it.only('Select future day, month and year via wevdriver', () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    // we added a relevant logic which will click on the calender and open it
    cy.get('#datepicker').click();
    // Get current year and next year
    var date = new Date();
    date.setDate(date.getDate() + 86) //EX: if today is 21 so will get tomorrow which is 22
    // create year and month , so add logic to get the year

    var futureYear = date.getFullYear(); // ex: 2022 if we add 360 we will select the same date in 2023
    var futureMonth = date.toLocaleString('default', { month: 'long' }) // --> this will correctly format the month for us 
    var futureDay = date.getDate(); //--> to get the future date

    cy.log('Future Year to select:' + futureYear);
    cy.log('Future month to select:' + futureMonth);
    cy.log('Future Day to select:' + futureDay);
         

    // create function to select year
    function selectMonthAndYear(){
      
      // select the class of the calender recatangle 
      // find the element uses a class of the month and year 
      // we want to select the 1st match of the class inside find coz it has 3 matches
      cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {   // then promising it by adding the info inside currentDate
       // add if statement , if it doesn't  currentDate include future year  by adding !
       if(!currentDate.text().includes(futureYear)) { // if the date doesnt qual the future year then keep clicking to next month 
         // perform select to move to the next monthh so we can validate on it
          cy.get('.next').first().click();
          // call our fuction aagin and keep going through the if statement until reaches the next year then it will stop = like a loop unil the condition is true
          selectMonthAndYear();  
       }
// add another then to can get the correct month - video 164
      }).then(() =>{
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {   // we wil keep this the same so we need to get the same elements 
          // add if statement will be changed from the above coz we want to check, if the element contains the future monthj
          if(!currentDate.text().includes(futureMonth)) { // if the date doesnt qual the future year then keep clicking to next month 
            // perform select to move to the next monthh so we can validate on it
             cy.get('.next').first().click();
             // call our fuction aagin and keep going through the if statement until reaches the next year then it will stop = like a loop unil the condition is true
             selectMonthAndYear();
             
          }
        })
      })

    }

    // create another function to select a future day
    function selectFutureDay(){
      // if the day listed contains the day we want future day
        cy.get('[class = "day"]').contains(futureDay).click();
    }
    // Call the function again
    selectMonthAndYear();
    // and call the selectFutureDay function below our previous function
    selectFutureDay();

  })

})
