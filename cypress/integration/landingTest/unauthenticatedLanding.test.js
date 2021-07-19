/// <reference types="cypress" />

describe('Unauthenticated Landing Page Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000')
    })

    it('Landing page able to load', () => {
        // check if website loads
        cy.log('Check if website loads')
        cy.visit('http://localhost:3000/')  

        // check if Register button work and link correctly
        cy.log('Check if REGISTER button works')
        cy.get('a.btn').contains('REGISTER').should('exist').click()
        cy.url().should('include', '/register')
        cy.go('back')

        // check if Login button work and link correctly
        cy.log('Check if LOGIN works')
        cy.get('a.btn').contains('LOGIN').should('exist').click()
        cy.url().should('include', '/login')
        cy.go('back')
    })
})