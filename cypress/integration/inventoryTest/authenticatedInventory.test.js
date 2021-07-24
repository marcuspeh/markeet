/// <reference types="cypress" />

// storing jwtToken
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNjM2VkOTA3NzUzMDAxNTQ3YmQ1ZCIsIm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjY1ODg0NDMsImV4cCI6MTY1ODE0NTM2OX0.YPQMR5RcHGKJcc2i6pDRVo1nBuErfGapOrAjQxAVN0M"
const temp = Math.floor(Math.random() * 100)

describe('Authenticated Inventory Page Test', () => {
    beforeEach(() => {
        // Set the jwtToken to authenticate the user
        cy.then(() => {
            window.localStorage.setItem('jwtToken', token)
        })
        cy.visit('http://localhost:3000/inventory')
    })

    it('Inventory page should say no inventory if no inventory', () => {
        // Inventory page should render inventory is empty
        cy.log('Testing if user has no inventory')
        var tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjZhNjNkMDgyOTg1NGM5MGQ0OTg2YiIsIm5hbWUiOiJUZXN0ZXIxMCIsImlhdCI6MTYyNjc3NzE1NSwiZXhwIjoxNjU4MzM0MDgxfQ.u_FsY4P-XpC2D1QriE75GYEWURybBFA5M6MVMbFsR3U"
        cy.then(() => {
            window.localStorage.clear()
            window.localStorage.setItem('jwtToken', tempToken)
        })
        cy.visit('http://localhost:3000/inventory')
        cy.contains('No inventory :(').should('exist')
    })

    it('Inventory page testing', () => {
        // Inventory page should render inventory
        cy.log('Checking to see if inventory is rendered')
        cy.visit('http://localhost:3000/inventory')
        cy.get('table').contains('No inventory :(').should('not.exist')
    
        // Able to see search input
        cy.log('Checking to see if able to see search button')
        cy.get('[data-test-id=search]').should('exist')

        // Able to see advance search button
        cy.log('Checking to see if able to see advance search button')
        cy.get('[data-test-id=advanceSearch]').should('exist')

        // Able to see add inventory button
        cy.log('Checking to see if able to see add inventory button')
        cy.get('[data-test-id=addInventory]').should('exist')
    })

    it('Adding product to inventory', () => {
        // User should be open and close the adding inventory page
        cy.log('Add inventory button clicked should render another screen')
        cy.get('[data-test-id=addInventory]').contains('Add Inventory').should('exist').click()
        cy.get('[id=barcode]').invoke('val').should('be.empty')
        cy.get('[id=title]').invoke('val').should('be.empty')
        cy.get('[id=picture]').invoke('val').should('be.empty')
        cy.get('[id=category]').invoke('val').should('be.empty')
        cy.get('[id=cost]').invoke('val').should('be.empty')
        cy.get('[id=price]').invoke('val').should('be.empty')
        cy.get('[id=quantity]').invoke('val').should('be.empty')
        cy.contains(' Back to inventory').should('exist').click()

        // Product should not be added if the fills are not all added in
        cy.log('Product will not be added if fields is not filled')
        cy.get('[data-test-id=addInventory]').contains('Add Inventory').should('exist').click()
        cy.contains('Save').should('exist').click()
        cy.get('[data-test-id=barcode] .red-text').contains('Barcode is required').should('exist')
        cy.get('[data-test-id=title] .red-text').contains('Title is required').should('exist')
        cy.get('[data-test-id=category] .red-text').contains('Category is required').should('exist')
        cy.get('[data-test-id=cost] .red-text').contains('Cost is required').should('exist')
        cy.get('[data-test-id=price] .red-text').contains('Price is required').should('exist')
        cy.get('[data-test-id=quantity] .red-text').contains('Quantity is required').should('exist')

        // Product should not be added if the any of the quantity, cost or price is negative
        cy.log('Product will not be added if necessary field is not filled')
        cy.get('[id=barcode]').clear().type('hello its me')
        cy.get('[id=title]').clear().type('hello its me')
        cy.get('[id=category]').clear().type('hello its me')
        cy.get('[id=cost]').clear().type('-12')
        cy.get('[id=price]').clear().type('-12')
        cy.get('[id=quantity]').clear().type('-12')
        cy.contains('Save').should('exist').click()
        cy.get('[data-test-id=barcode] .red-text').should('be.empty')
        cy.get('[data-test-id=title] .red-text').should('be.empty')
        cy.get('[data-test-id=category] .red-text').should('be.empty')
        cy.get('[data-test-id=cost] .red-text').contains('Cost cannot be less than 0').should('exist')
        cy.get('[data-test-id=price] .red-text').contains('Price cannot be less than 0').should('exist')
        cy.get('[data-test-id=quantity] .red-text').contains('Quantity cannot be less than 0').should('exist')

        // Product should added if the necessary input are filled in
        cy.log('Product will be added if necessary field is filled')
        cy.get('[id=barcode]').clear().type(temp)
        cy.get('[id=title]').clear().type(temp)
        cy.get('[id=category]').clear().type(temp)
        cy.get('[id=cost]').clear().type(temp)
        cy.get('[id=price]').clear().type(temp)
        cy.get('[id=quantity]').clear().type(temp)
        cy.contains('Save').should('exist').click()
        cy.get('[data-test-id=' + temp + ']').contains(temp).should('exist')
    })

    it('Editing product in inventory', () => {
        // User should see the edit page
        cy.log('Checking edit page of product')
        cy.get('[data-test-id=' + temp + ']').contains('edit').should('exist').click()
        cy.get('[id=barcode]').invoke('val').should('contain', temp)
        cy.get('[id=title]').invoke('val').should('contain', temp)
        cy.get('[id=category]').invoke('val').should('contain', temp)
        cy.get('[id=cost]').invoke('val').should('contain', temp)
        cy.get('[id=price]').invoke('val').should('contain', temp)
        cy.get('[id=quantity]').invoke('val').should('contain', temp)
        cy.contains(' Back to inventory').should('exist').click()

        // User should be able to cancel edit product
        cy.log('Checking edit page of product')
        cy.get('[data-test-id=' + temp + ']').contains('edit').should('exist').click()
        cy.get('[id=barcode]').clear().type(temp * 2)
        cy.get('[id=category]').clear().type(temp * 2)
        cy.get('[id=cost]').clear().type(temp * 2)
        cy.get('[id=price]').clear().type(temp * 2)
        cy.get('[id=quantity]').clear().type(temp * 2)
        cy.contains('Cancel').should('exist').click()
        cy.get('[data-test-id=' + temp + ']').contains(temp * 2).should('not.exist')

        // User should edit product
        cy.log('Checking edit page of product')
        cy.get('[data-test-id=' + temp + ']').contains('edit').should('exist').click()
        cy.get('[id=barcode]').clear().type(temp * 2)
        cy.get('[id=category]').clear().type(temp * 2)
        cy.get('[id=cost]').clear().type(temp * 2)
        cy.get('[id=price]').clear().type(temp * 2)
        cy.get('[id=quantity]').clear().type(temp * 2)
        cy.contains('Save').should('exist').click()
        cy.get('[data-test-id=' + temp + ']').contains(temp * 2).should('exist')
    })

    it('Deleting product in inventory', () => {
        // User should see the delete button
        cy.log('Checking if able to see delete button')
        cy.get('[data-test-id=' + temp + ']').contains('edit').should('exist').click()
        cy.get('[data-test-id=deleteSection]').contains('Delete item?').should('exist').click()
        cy.get('[data-test-id=deleteSection]').contains('Delete').should('exist')
        cy.get('[data-test-id=deleteSection]').contains('Cancel').should('exist').click()
        cy.get('[data-test-id=deleteSection]').contains('Delete item?').should('exist')

        // User should be able to delete product
        cy.log('Checking if able to delete button')
        cy.get('[data-test-id=deleteSection]').contains('Delete item?').should('exist').click()
        cy.get('[data-test-id=deleteSection]').contains('Delete').should('exist').click()
        cy.get('.table').should('exist')
        cy.get('[data-test-id=' + temp + ']').should('not.exist')
    })

    it('Searching product in inventory', () => {
        // User should be able to search product
        cy.log('Checking if able to search')
        cy.get('[data-test-id=search]').type("Air")
        cy.get('tbody').find('tr').each(($tr) => {
            expect($tr).contain('Air')
        })
    })
})