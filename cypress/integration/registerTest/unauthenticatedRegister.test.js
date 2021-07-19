/// <reference types="cypress" />

describe('Unauthenticated Landing Page Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000')
    })

    it('Register page looks good', () => {
        // check if register page loads
        cy.log('Checking if register page loads')
        cy.visit('http://localhost:3000/register')  

        // check if link to login page works
        cy.log('Checking if link to log in page works')
        cy.contains('Already have an account? Log in').should('exist').contains('Log in').click()
        cy.url().should('include', '/login')
        cy.go('back')

        // check if link to go back to home exist
        cy.log('Checking if link to home works')
        cy.contains('Back to home').should('exist').click()
        cy.url().should('not.include', '/login')
        cy.url().should('not.include', '/register')
        cy.go('back')
        
        // check if sign up with google exist
        cy.log('Checking if sign up with Google exist')
        cy.contains('Sign up with Google').should('exist')

        // check if form to register exist
        cy.log('Checking if form to register an account exist')
        cy.get('form')
    })
})