/// <reference types="cypress" />

describe("Unauthenticated Dashboard Page Test", () => {
  before(() => {
    // Clear localStorage
    cy.then(() => {
      window.localStorage.clear();
    });
    cy.visit("http://localhost:3000/dashboard");
  });

  it("Profile page should redirect to login", () => {
    // Profile page should not be rendered if user is logged in
    cy.log("Testing if user will be redirected to log in");
    cy.url().should("include", "/login");
  });
});
