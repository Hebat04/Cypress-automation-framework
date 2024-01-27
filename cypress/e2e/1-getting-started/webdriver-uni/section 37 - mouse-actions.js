/// <reference types = "Cypress"/>


describe("Test Mouse actions", () => {

    //video 135

    it("Scroll element into view", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page and open it in the page on the same page 
        // if we want to scroll to give an element into view. use --> .scrollIntoView()
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })


    })

    //video 136

    it("I should be able to drag and drop a draggable item", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page and open it in the page on the same page 
        // if we want to scroll to give an element into view. use --> .scrollIntoView()
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        // search for the item that we need to drap and drop it in another element
        // .trigger inside the round brackets single quotes and you will see a list of actions you can perform
        // simulate mouse
        // then add which: 1 --> i is going to click on he center of that given element
        // question which:1 is not so clear to me 
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        // then we want to drop it in the another box
        // then mouseover  on the element and then release action - not the correct action here 
        // we must use mousemove --> move the mouse to the another box
        // mousedown to hold the element - mouse up to release you finger from it

        /*  For MouseEvent, event.which is a number representing a given button: 
        https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/which
      
      0: No button
      1: Left button
      2: Middle button (if present)
      3: Right button */
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })

    })

    //video 137

    it("I should be able to double mouse click ", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page and open it in the page on the same page 
        // if we want to scroll to give an element into view. use --> .scrollIntoView()
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        // get the elemet that we need to double click on it
        // if we write double you cannot find anything but try to write.click then choose .dblclick() to perform double click
        cy.get('#double-click').dblclick()


    })

    //video 138 

    it.only("I should be able to hold down the left mouse click button on a given element", () => {

        cy.visit("https://www.webdriveruniversity.com/")
        // get the id of the page and open it in the page on the same page 
        // if we want to scroll to give an element into view. use --> .scrollIntoView()
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        // get the element that we need to do action it
        // .trigger to perform the click on the mouse and which:1 to press on the center of the element
        // add promise to add asseration to make sure that we are interacting with the taregting element and correct background color
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            // we get $element = result 
            // Asseration
            // css('background-color) is a css attribute and then get the color of the element
            // if u want to change a color of specific element u can  the following code .css('background-color')
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')


        })





    })





})