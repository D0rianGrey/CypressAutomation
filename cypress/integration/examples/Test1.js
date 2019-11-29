/// <reference types ="Cypress" />

describe('My First Test Suite', function()
{

    it('My First Test case', function() {

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type('ca');
      cy.wait(2000);
      cy.get('.product:visible').should('have.length', 4); // option 1


      cy.get('.products').as('productLocator');

      cy.get('@productLocator').find('.product').should('have.length', 4) //option 2

      cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
      {
        console.log("'ADD TO CART' button is clicked on second product");
      });

      //cy.contains('ADD TO CARD');
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews'))
        {
          $el.find('button').click();
          cy.log("'ADD TO CART' button is clicked on " + textVeg + " product")
        }

      });

      //assert if logo text is correctly displayed

      cy.get('.brand').should('have.text','GREENKART');


      //this is to print in logs
      cy.get('.brand').then(function(logoElement)
      {
        cy.log(logoElement.text());
      });

      //cy.get('.brand').text();
      //const logo = cy.get('.brand')
    cy.log('Cypress Hello');
    
    });


});