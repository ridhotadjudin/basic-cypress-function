/// <reference types="cypress" />  

describe('Working with inputs', () => {
    beforeEach('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/v1/', {timeout: 30000})
        cy.url().should('include','www.saucedemo.com/v1/')
    });

    it('Doing login with valid credentials', () => {
        cy.fixture("user-04").then(user => {
            const localUsername = user.username
            const localPassword = user.password

            cy.loginToSaucedemo(localUsername, localPassword)

            cy.url().should('include','inventory.html')
        });
    });
});