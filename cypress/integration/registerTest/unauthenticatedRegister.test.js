/// <reference types="cypress" />

describe('Unauthenticated Landing Page Test', () => {
    before(() => {
        // Clear localStorage
        cy.then(() => {
            window.localStorage.clear()
        })
        cy.visit('http://localhost:3000/register')
    })

    it('Register page looks good', () => {
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

    it('Registering without filling in the form', () => {
        // Clearing the form and registering
        cy.log('Testing for error when nothing is filled in')
        cy.get('[id=name]').clear()
        cy.get('[id=email]').clear()
        cy.get('[id=password]').clear()
        cy.get('[id=password2]').clear()
        cy.contains('REGISTER').click()
        cy.contains('Name field is required').should('exist')
        cy.contains('Email field is required').should('exist')
        cy.contains('Password must be at least 6 characters').should('exist')
        cy.contains('Confirm password field is required').should('exist')
    })

    it('Registering with invalid email', () => {
        // Registering with invalid email
        cy.log('Testing for error when invalid email is entered')
        cy.get('[id=email]').clear().type("asdfghjkl")
        cy.contains('REGISTER').click()
        cy.contains('Email is invalid').should('exist')
    })

    it('Registering with short password', () => {
        // Registering with short password
        cy.log('Testing for error when invalid email is entered')
        cy.get('[id=password]').clear().type("12345")
        cy.contains('REGISTER').click()
        cy.contains('Password must be at least 6 characters').should('exist')
    })

    it('Registering with mismatch second password', () => {
        // Registering with mismatch second password
        cy.log('Testing for error when password confirmation field is mismatch')
        cy.get('[id=password]').clear().type("asdfghjkl")
        cy.get('[id=password2]').clear().type("asdfghjk")
        cy.contains('REGISTER').click()
        cy.contains('Passwords must match').should('exist')
    })

    it('Registering with registered email', () => {
        // Registering with mismatch second password
        cy.log('Testing for error when email entered is registered')
        cy.get('[id=name]').clear().type("markeet")
        cy.get('[id=email]').clear().type("test@markeet.com")
        cy.get('[id=password]').clear().type("asdfghjkl")
        cy.get('[id=password2]').clear().type("asdfghjkl")
        cy.contains('REGISTER').click()
        cy.contains('Email already exists').should('exist')
    })

})