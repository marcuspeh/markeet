/// <reference types="cypress" />

// storing jwtToken
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNjM2VkOTA3NzUzMDAxNTQ3YmQ1ZCIsIm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjY1ODg0NDMsImV4cCI6MTY1ODE0NTM2OX0.YPQMR5RcHGKJcc2i6pDRVo1nBuErfGapOrAjQxAVN0M";

describe("Authenticated Cashier Page Test", () => {
  beforeEach(() => {
    // Set the jwtToken to authenticate the user
    cy.then(() => {
      window.localStorage.setItem("jwtToken", token);
    });
    cy.visit("http://localhost:3000/cashier");
  });

  it("Cashier page loads properly", () => {
    //check if contains all appropriate titles in cashier page
    cy.contains("Title");
    cy.contains("Category");
    cy.contains("Price");
    cy.contains("Quantity");
    cy.contains("Receipt");
    cy.contains("Checkout");

    // checks if local cart exists
    cy.get("table").should("exist");

    // checks if inventory display exists
    cy.get(".box.card.border-dark > div").should("exist");
  });

  it("Testing cashier as a whole, including cart, inventory and checkout", () => {
    // checks add to cart button
    cy.get(".box.card.border-dark > div")
      .first()
      .contains("Add to cart")
      .click();

    // checks direct changing of quantity to add to cart
    cy.get(".box.card.border-dark > div input").first().clear().type(3);

    // checks plus and minus buttons in inventory display
    cy.get(".box.card.border-dark > div").first().contains("+").click();
    cy.get(".box.card.border-dark > div").first().contains("+").click();
    cy.get(".box.card.border-dark > div").first().contains("-").click();

    cy.get(".box.card.border-dark > div")
      .first()
      .contains("Add to cart")
      .click();

    // checks direct changing of quantity in cart
    cy.get("table input").first().clear().type(3);

    // checks plus and minus buttons in cart
    cy.get("table").first().contains("+").click();
    cy.get("table").first().contains("+").click();
    cy.get("table").first().contains("-").click();

    // checks input that goes over total quantity available
    cy.get("table input").first().clear().type(50);
    cy.get("table").first().contains("+").click();

    // checks input that is 0
    cy.get("table input").first().clear().type(0);

    cy.get(".box.card.border-dark > div")
      .first()
      .contains("Add to cart")
      .click();

    // checks checkout
    cy.contains("Checkout").click();
    cy.wait(5000);

    // restocking product's quantity for future tests
    cy.visit("http://localhost:3000/inventory");
    cy.contains("edit").first().should("exist").click();
    cy.get("[id=quantity]").clear().type(20);
    cy.contains("Save").should("exist").click();
    cy.visit("http://localhost:3000/cashier");
  });

  // it('Basic info (name & email) should be shown', () => {
  //     // Name and email is shown
  //     cy.log('Testing if name and email of the user is shown')
  //     cy.get('[id=name]').invoke('val').should('not.be.empty')
  //     cy.get('[id=email]').invoke('val').should('not.be.empty')
  // })

  // it('Name update should work', () => {
  //     // Clicking on update button without editing anything
  //     cy.log('Testing for error when update button is clicked without editing username')
  //     cy.get('[data-test-id=name]').contains('Update').click()
  //     cy.get('[data-test-id=name]').contains('Please enter a new name').should('exist')
  //     cy.get('nav').contains('Tester').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for error when update button is clicked with empty username')
  //     cy.get('[id=name]').clear()
  //     cy.get('[data-test-id=name]').contains('Update').click()
  //     cy.get('[data-test-id=name]').contains('Name field is required').should('exist')
  //     cy.get('nav').contains('Tester').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with new username')
  //     cy.get('[id=name]').clear().type("Test")
  //     cy.get('[data-test-id=name]').contains('Update').click()
  //     cy.get('[data-test-id=name]').contains('Name updated.').should('exist')
  //     cy.get('nav').contains('Test').should('exist')

  //     // Updating username back to original
  //     cy.log('Updating username back to original')
  //     cy.get('[id=name]').clear().type("Tester")
  //     cy.get('[data-test-id=name]').contains('Update').click()
  //     cy.get('[data-test-id=name]').contains('Name updated.').should('exist')
  //     cy.get('nav').contains('Test').should('exist')
  // })

  // it('Address update should work', () => {
  //     // Clicking on update button without editing anything
  //     cy.log('Testing for error when update button is clicked without editing address')
  //     cy.get('[data-test-id=address]').contains('Update').click()
  //     cy.get('[data-test-id=address]').contains('Please enter a new address').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for error when update button is clicked with empty address')
  //     cy.get('[id=address]').clear()
  //     cy.get('[data-test-id=address]').contains('Update').click()
  //     cy.get('[data-test-id=address]').contains('Address field is required').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with new address')
  //     cy.get('[id=address]').clear().type("123 Random Road, Singapore 123456")
  //     cy.get('[data-test-id=address]').contains('Update').click()
  //     cy.get('[data-test-id=address]').contains('Address updated.').should('exist')

  //     // Updating address back to original
  //     cy.log('Updating address back to original')
  //     cy.get('[id=address]').clear().type("123 Computing Road, Singapore 123456")
  //     cy.get('[data-test-id=address]').contains('Update').click()
  //     cy.get('[data-test-id=address]').contains('Address updated.').should('exist')
  // })

  // it('Email update should work', () => {
  //     // Clicking on update button without editing anything
  //     cy.log('Testing for error when update button is clicked without editing email')
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Please enter a new email').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for error when update button is clicked with empty email')
  //     cy.get('[id=email]').clear()
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Email field is required').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with invalid email')
  //     cy.get('[id=email]').clear().type("test2")
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Email is invalid').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with used email')
  //     cy.get('[id=email]').clear().type("johndoe@markeet.com")
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Email already exists').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with new email')
  //     cy.get('[id=email]').clear().type("test2@markeet.com")
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Email updated').should('exist')

  //     // Updating email back to original
  //     cy.log('Updating email back to original')
  //     cy.get('[id=email]').clear().type("test@markeet.com")
  //     cy.get('[data-test-id=email]').contains('Update').click()
  //     cy.get('[data-test-id=email]').contains('Email updated').should('exist')
  // })

  // it('Number update should work', () => {
  //     // Clicking on update button without editing anything
  //     cy.log('Testing for error when update button is clicked without editing number')
  //     cy.get('[data-test-id=number]').contains('Update').click()
  //     cy.get('[data-test-id=number]').contains('Please enter a new number').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for error when update button is clicked with empty number')
  //     cy.get('[id=number]').clear()
  //     cy.get('[data-test-id=number]').contains('Update').click()
  //     cy.get('[data-test-id=number]').contains('Number field is required').should('exist')

  //     // Clicking on update button when input is blank
  //     cy.log('Testing for update when update button is clicked with new number')
  //     cy.get('[id=number]').clear().type("23456789")
  //     cy.get('[data-test-id=number]').contains('Update').click()
  //     cy.get('[data-test-id=number]').contains('Number updated.').should('exist')

  //     // Updating username back to original
  //     cy.log('Updating number back to original')
  //     cy.get('[id=number]').clear().type("98765432")
  //     cy.get('[data-test-id=number]').contains('Update').click()
  //     cy.get('[data-test-id=number]').contains('Number updated.').should('exist')
  // })

  // it('Phone number should be shown', () => {
  //     // Phone number should be shown
  //     cy.log('Testing if phone number of the user is shown')
  //     cy.get('[id=number]').invoke('val').should('not.be.empty')
  // })

  // it('Address should be shown', () => {
  //     // Address should be shown
  //     cy.log('Testing if address of the user is shown')
  //     cy.get('[id=address]').invoke('val').should('not.be.empty')
  // })

  // it('Password update should work', () => {
  //     // Clicking on save button without entering anything
  //     cy.log('Testing for error when save button is clicked without any input')
  //     cy.get('[id=oldPassword').clear()
  //     cy.get('[id=password').clear()
  //     cy.get('[id=password2').clear()
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button without old password
  //     cy.log('Testing for error when save button is clicked without old password')
  //     cy.get('[id=oldPassword').clear()
  //     cy.get('[id=password').clear().type('markeet')
  //     cy.get('[id=password2').clear().type('markeet')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').contains('Old Password is required').should('exist')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button without new password
  //     cy.log('Testing for error when save button is clicked without new password')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear()
  //     cy.get('[id=password2').clear()
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').contains('Password field is required').should('exist')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button without confirmation password
  //     cy.log('Testing for error when save button is clicked without confirmation password')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear().type('markeet')
  //     cy.get('[id=password2').clear()
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').contains('Confirm password field is required').should('exist')

  //     // Clicking on save button without new  password
  //     cy.log('Testing for error when save button is clicked without new password')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear()
  //     cy.get('[id=password2').clear().type('markeet')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').contains('Password field is required').should('exist')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button with wrong old password
  //     cy.log('Testing for error when save button is clicked with wrong password')
  //     cy.get('[id=oldPassword').clear().type('asfghjkl')
  //     cy.get('[id=password').clear().type('markeet')
  //     cy.get('[id=password2').clear().type('markeet')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').contains('Password incorrect').should('exist')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button with different new password
  //     cy.log('Testing for error when save button is clicked with different new password')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear().type('asdfghjkl')
  //     cy.get('[id=password2').clear().type('markeet')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').contains('Passwords must match').should('exist')

  //     // Clicking on save button with less than 6 characters password
  //     cy.log('Testing for error when save button is clicked with less than 6 characters password')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear().type('12345')
  //     cy.get('[id=password2').clear().type('12345')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').should('be.empty')
  //     cy.get('[data-test-id=password] span.red-text').contains('Password must be at least 6 characters').should('exist')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')

  //     // Clicking on save button with appropriate field filled
  //     cy.log('Testing for error when save button with appropriate field filled')
  //     cy.get('[id=oldPassword').clear().type('markeet')
  //     cy.get('[id=password').clear().type('markeet')
  //     cy.get('[id=password2').clear().type('markeet')
  //     cy.get('[data-test-id=passwordSave]').contains('Save').click()
  //     cy.get('[data-test-id=oldPassword] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=oldPassword] span.green-text').contains('Password updated').should('exist')
  //     cy.get('[data-test-id=password] span.red-text').should('be.empty')
  //     cy.get('[data-test-id=password2] span.red-text').should('be.empty')
  // })
});
