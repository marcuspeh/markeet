/// <reference types="cypress" />

// storing jwtToken
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNjM2VkOTA3NzUzMDAxNTQ3YmQ1ZCIsIm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjY1ODg0NDMsImV4cCI6MTY1ODE0NTM2OX0.YPQMR5RcHGKJcc2i6pDRVo1nBuErfGapOrAjQxAVN0M"
        
describe('Authenticated Navbar Test', () => {
    beforeEach(() => {
        // Set the jwtToken to authenticate the user
        cy.then(() => {
            window.localStorage.setItem('jwtToken', token)
        })
        cy.visit('http://localhost:3000')
    })

    it('Navbar should be shown', () => {
        // Navbar should show up 
        cy.log('Navbar should show up')
        cy.get('nav').should('exist')
    })

    it('Navbar should have user\'s name', () => {
        // Navbar should contain user's name
        cy.log('Navbar should contain user\'s name')
        cy.get('nav').contains('Hello,Tester').should('exist')
    })

    it('Buttons in navbar works', () => {
        // Pressing "markeet" on navbar will bring user to dashboard
        cy.log('Testing if user will be redirected to dashboard when "markeet" is pressed')
        cy.contains('markeet').should('exist').click()
        cy.url().should('include', '/dashboard')

        // Pressing "Cashier" on navbar will bring user to cashier
        cy.log('Testing if user will be redirected to cashier when "Cashier" is pressed')
        cy.contains('Cashier').should('exist').click()
        cy.url().should('include', '/cashier')

        // Pressing "Inventory" on navbar will bring user to cashier
        cy.log('Testing if user will be redirected to inventory when "Inventory" is pressed')
        cy.contains('Inventory').should('exist').click()
        cy.url().should('include', '/inventory')

        // Pressing "Sales" on navbar will bring user to cashier
        cy.log('Testing if user will be redirected to sales when "Sales" is pressed')
        cy.contains('Sales').should('exist').click()
        cy.url().should('include', '/sales')

        // Pressing on user's on navbar will bring user to profile page
        cy.log('Testing if user will be redirected to profile page when their name is pressed')
        cy.contains('Tester').should('exist').click()
        cy.url().should('include', '/profile')
    })
})