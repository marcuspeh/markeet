/// <reference types="cypress" />

// storing jwtToken
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNjM2VkOTA3NzUzMDAxNTQ3YmQ1ZCIsIm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjY1ODg0NDMsImV4cCI6MTY1ODE0NTM2OX0.YPQMR5RcHGKJcc2i6pDRVo1nBuErfGapOrAjQxAVN0M"
        
describe('Authenticated Advance Search Inventory Page Test', () => {
    beforeEach(() => {
        // Set the jwtToken to authenticate the user
        cy.then(() => {
            window.localStorage.setItem('jwtToken', token)
        })
        cy.visit('http://localhost:3000/inventory')
    })

    it('Basic features of advance search', () => {
        // User should be able to search product
        cy.log('Checking if able to see advance search')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('table').should('not.exist')
        cy.contains('Sort').should('exist')
        
        // User should be able to return to inventory
        cy.log('Checking if able to return to inventory')
        cy.contains(' Back to inventory').should('exist').click()

        // User should be able to search product
        cy.log('Checking if able to see advance search')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#barcode').clear().type("101")
        cy.contains('Save').should('exist').click()
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#barcode').invoke('val').should('equal', '101')

        // User should be able to reset searched criterial
        cy.contains('Reset').click()
        cy.get('table').should('exist')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#barcode').invoke('val').should('be.empty')
    })

    it('Searching product in inventory using barcode', () => {
        // User should be able to search product
        cy.log('Checking if able to search by barcode')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#barcode').clear().type("2")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            expect($tr.find('td').eq(0)).contain('2')
        })
    })

    it('Searching product in inventory using title', () => {
        // User should be able to search title
        cy.log('Checking if able to search by title')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#title').clear().type("iPad")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            expect($tr.find('td').eq(1)).contain('iPad')
        })
    })

    it('Searching product in inventory using category', () => {
        // User should be able to search category
        cy.log('Checking if able to search by category')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#category').clear().type("Mac")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            expect($tr.find('td').eq(3)).contain('Mac')
        })
    })

    it('Searching product in inventory using price', () => {
        // User should be able to search using min price
        cy.log('Checking if able to search by min price')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minPrice').clear().type("1500")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(5).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(1500)
            })
        })

        // User should be able to search using max price
        cy.log('Checking if able to search by max price')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#maxPrice').clear().type("2500")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(5).invoke('text').then((t) => {
                expect(new Number(t)).be.lte(2500)
            })
        })
        
        // User should be able to search using both min and max price
        cy.log('Checking if able to search by min and max price')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minPrice').clear().type("1500")
        cy.get('#maxPrice').clear().type("2500")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(5).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(1500)
                expect(new Number(t)).be.lte(2500)
            })
        })
    })

    it('Searching product in inventory using cost', () => {
        // User should be able to search using min cost
        cy.log('Checking if able to search by min cost')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minCost').clear().type("1000")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(4).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(1000)
            })
        })

        // User should be able to search using max cost
        cy.log('Checking if able to search by max cost')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#maxCost').clear().type("1500")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(4).invoke('text').then((t) => {
                expect(new Number(t)).be.lte(1500)
            })
        })
        
        // User should be able to search using both min and max cost
        cy.log('Checking if able to search by min and max cost')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minCost').clear().type("1000")
        cy.get('#maxCost').clear().type("1500")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(4).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(1000)
                expect(new Number(t)).be.lte(1500)
            })
        })
    })

    it('Searching product in inventory using stock', () => {
        // User should be able to search using min stock
        cy.log('Checking if able to search by min stock')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minStock').clear().type("3")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(6).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(3)
            })
        })

        // User should be able to search using max stock
        cy.log('Checking if able to search by max stock')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#maxStock').clear().type("15")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(6).invoke('text').then((t) => {
                expect(new Number(t)).be.lte(15)
            })
        })
        
        // User should be able to search using both min and max stock
        cy.log('Checking if able to search by min and max stock')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#minStock').clear().type("3")
        cy.get('#maxStock').clear().type("15")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            cy.wrap($tr).find('td').eq(6).invoke('text').then((t) => {
                expect(new Number(t)).be.gte(3)
                expect(new Number(t)).be.lte(15)
            })
        })
    })

    it('Searching product in inventory using title and category', () => {
        // User should be able to search title and category
        cy.log('Checking if able to search by multiple search')
        cy.get('[data-test-id=advanceSearch]').click()
        cy.get('#title').clear().type("iP")
        cy.get('#category').clear().type("ne")
        cy.contains('Save').should('exist').click()
        cy.get('tbody').find('tr').each(($tr) => {
            expect($tr.find('td').eq(1)).contain('iP')
            expect($tr.find('td').eq(3)).contain('ne')
        })
    })
})