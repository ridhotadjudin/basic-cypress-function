/// <reference types="cypress" />  

describe('Working with inputs', () => {
    beforeEach('Visit the website and login', () => {
        cy.visit('zero.webappsecurity.com/login.html', {timeout: 30000})
        cy.url().should('include','login.html')
        cy.fixture("user-03").then(user => {
            const localUsername = user.validCredentials.username
            const localPassword = user.validCredentials.password

            cy.loginToZerobank(localUsername, localPassword)

            cy.get('a').contains('Zero Bank')
        });
    });

    it('Doing payment with valid transactions', () => {
        cy.navigateToPayBills()

        cy.validTransactionPayBills('Sprint','2','666','26-07-2024','Ini deskripsi')

    });

    it('Doing payment with valid transactions check based on value', () => {
        cy.navigateToPayBills()

        cy.validTransactionPayBillsAssertValue('Sprint','2','666','26-07-2024','Ini deskripsi')

    });
});