/// <reference types="cypress" />

describe('Unauthenticated Navbar Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000')
    })

    it('Navbar should not show up', () => {
        // check if nav bar will show up if not logged in
        cy.log('Checking if Navbar exist if not logged in')
        cy.get('nav').should('not.exist')
    })
})