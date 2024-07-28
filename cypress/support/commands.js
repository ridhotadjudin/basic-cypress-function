Cypress.Commands.add('loginToSaucedemo', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
    cy.get('input[id="user-name"]').clear()
    cy.get('input[id="user-name"]').type(username)

    cy.get('input[id="password"]').clear()
    cy.get('input[id="password"]').type(password)

    cy.get('input[id="login-button"]').click()
})

Cypress.Commands.add('loginToZerobank', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    // cy.get('input[id="user_remember_me"]').click()

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('navigateToPayBills', () => {
    // cy.get('li[id="onlineBankingMenu"]').click()
    // cy.get('h1').contains('Online Banking')
    
    // cy.get('span[id="pay_bills_link"]').click()
    // cy.get('h1').contains('Make payments to your saved payees')

    cy.get('li[id="pay_bills_tab"]').click()
    cy.get('h2').contains('Make payments to your saved payees').should('be.visible')
})

Cypress.Commands.add('validTransactionPayBills', (getPayee,  getAccount, getAmount, getDate, getDescription) => {
    cy.get('select[id="sp_payee"]').select(getPayee)

    cy.get('select[id="sp_account"]').select(getAccount)

    cy.get('input[id="sp_amount"]').clear()
    cy.get('input[id="sp_amount"]').type(getAmount)

    cy.get('input[id="sp_date"]').click()
    cy.xpath('//a[normalize-space()='+getDate+']').click()

    cy.get('input[id="sp_description"]').clear()
    cy.get('input[id="sp_description"]').type(getDescription)

    cy.get('input[id="pay_saved_payees"]').click()

    cy.url().should('include', 'pay-bills-saved-payee')
    cy.get('div[id="alert_content"]').should('be.visible')
})

Cypress.Commands.add('validTransactionPayBillsAssertValue', (getPayee,  getAccount, getAmount, getDate, getDescription) => {
    cy.get('select[id="sp_payee"]').select(getPayee)

    cy.get('select[id="sp_account"]').select(getAccount)

    cy.get('input[id="sp_amount"]').clear()
    cy.get('input[id="sp_amount"]').type(getAmount)

    cy.get('input[id="sp_date"]').click()
    cy.xpath('//a[normalize-space()='+getDate+']').click()
    cy.get('input[id="sp_description"]').type(getDate)

    cy.get('input[id="sp_description"]').clear()
    cy.get('input[id="sp_description"]').type(getDescription)

    cy.get('input[id="pay_saved_payees"]').click()

    cy.url().should('include', 'pay-bills-saved-payee')
    cy.get('div[id="alert_content"]').should('be.visible')
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })