/// <reference types="cypress" />

describe('Unauthenticated Navbar Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000')
    })

    it('Navbar for landing page should show up', () => {
        // check if nav bar will show up if not logged in
        cy.log('Checking if Navbar for landing shows up')
        cy.get('nav').contains('Home').should('exist')
    })
})