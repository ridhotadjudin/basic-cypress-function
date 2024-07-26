/// <reference types="cypress" />  

describe('Working with inputs', () => {
    beforeEach('Visit the website', () => {
        cy.visit('zero.webappsecurity.com/login.html', {timeout: 30000})
        cy.url().should('include','login.html')
    });

    it('Doing login with valid credentials', () => {
        cy.fixture("user-03").then(user => {
            const localUsername = user.validCredentials.username
            const localPassword = user.validCredentials.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(localUsername)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(localPassword)

            cy.get('input[id="user_remember_me"]').click()

            cy.xpath('(//input[@name="submit"])[1]').click()

            cy.get('a').contains('Zero Bank').should('be.visible')
        });
    });

    it('Doing login with invalid credentials', () => {
        cy.fixture("user-03").then(user => {
            const localUsername = user.invalidCredentials.username
            const localPassword = user.invalidCredentials.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(localUsername)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(localPassword)

            cy.get('input[id="user_remember_me"]').click()

            cy.xpath('(//input[@name="submit"])[1]').click()

            cy.get('div[class="alert alert-error"]').contains('Login and/or password are wrong')
        });
    });
});