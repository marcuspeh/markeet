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

        // Navbar should contain user's name
        cy.log('Navbar should contain user\'s name')
        cy.get('nav').contains('Hello,Tester').should('exist')
    })
})