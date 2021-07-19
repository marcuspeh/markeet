/// <reference types="cypress" />

describe('Unauthenticated Landing Page Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000/login')
    })

    it('Login page looks good', () => {
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

    it('Log in without email and password', () => {
        // Log in without filling in the form
        cy.log('Testing for error when logging in without email and password')
        cy.get('[id=email]').clear()
        cy.get('[id=password]').clear()
        cy.contains('LOGIN').click()
        cy.contains('Email field is required').should('exist')
        cy.contains('Password field is required').should('exist')
    })

    it('Log in with email but no password', () => {
        // filling in the log in form with email only
        cy.log('Testing for error when logging in with email filled only')
        cy.get('[id=email]').clear().type('test@markeet.com')
        cy.get('[id=password]').clear()
        cy.contains('LOGIN').click()
        cy.contains('Password field is required').should('exist')
    })

    it('Log in with password filled but no email', () => {
        // filling in the log in form with password only
        cy.log('Testing for error when logging in with password filled only')
        cy.get('[id=email]').clear()
        cy.get('[id=password]').clear().type('markeet')
        cy.contains('LOGIN').click()
        cy.contains('Email field is required').should('exist')
    })

    it('Log in with invalid email', () => {
        // filling in the log in form with invalid email
        cy.log('Testing for error when logging in with invalid email')
        cy.get('[id=email]').clear().type('test')
        cy.contains('LOGIN').click()
        cy.contains('Email is invalid').should('exist')
    })

    it('Log in with email and wrong password', () => {
        // filling in the log in form with wrong password
        cy.log('Testing if user is able to log in with wrong password')
        cy.get('[id=email]').clear().type('test@markeet.com')
        cy.get('[id=password]').clear().type('asdfghjkl')
        cy.contains('LOGIN').click()
        cy.contains('Password incorrect').should('exist')
    })

    it('Log in with unregistered email', () => {
        // filling in the log in form with unregistered email
        cy.log('Testing if user is able to log in with not registered email')
        cy.get('[id=email]').clear().type('asdfgjkl@markeet.com')
        cy.get('[id=password]').clear().type('asdfghjkl')
        cy.contains('LOGIN').click()
        cy.contains('Email not found').should('exist')
    })

    it('Log in with email and password', () => {
        // filling in the log in form and login
        cy.log('Testing if user is able to log in')
        cy.get('[id=email]').clear().type('test@markeet.com')
        cy.get('[id=password]').clear().type('markeet')
        cy.contains('LOGIN').click()
        cy.url().should('include', '/dashboard')
    })
})