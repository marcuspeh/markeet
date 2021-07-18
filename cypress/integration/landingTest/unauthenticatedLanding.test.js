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

    it('Login page looks good', () => {
        // check if login page load
        cy.log('Checking if login page loads')
        cy.visit('http://localhost:3000/login')    

        // check if link to register page works
        cy.log('Checking if link to register an account works')
        cy.contains('Don\'t have an account? Register').should('exist').contains('Register').click()
        cy.url().should('include', '/register')
        cy.go('back')

        // check if link to go back to home exist
        cy.log('Checking if link to home works')
        cy.contains('Back to home').should('exist').click()
        cy.url().should('not.include', '/login')
        cy.url().should('not.include', '/register')
        cy.go('back')

        
        // check if google sign in exist
        cy.log('Checking if sign in with Google exist')
        cy.contains('Sign In With Google').should('exist')

        // check if form to enter input exist
        cy.log('Checking if form to log in exist')
        cy.get('form')
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

    it('Log in should work fine', () => {
        // Visit login page
        cy.log('Visiting login page')
        cy.visit('http://localhost:3000/login')  

        // filling in the log in form and login
        cy.get('[id=email]').type('test@markeet.com')
        cy.get('[id=password]').type('markeet')
        cy.contains('LOGIN').click()
        cy.url().should('include', '/dashboard')
    })
})