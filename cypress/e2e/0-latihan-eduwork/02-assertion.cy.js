/// <reference types="cypress" />  

describe('Browser actions', () => {
    beforeEach('Should load correct url', () => {
        cy.visit('https://www.saucedemo.com/v1/', {timeout: 10000})
    });

    it('Should check correct url', () => {
        cy.url().should('include','saucedemo.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('title').contains('Swag Labs')
    });
});