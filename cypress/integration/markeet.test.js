/// <reference types="cypress" />

describe("Log into markeet", () => {
  it("Login should work", () => {
    cy.visit("localhost:3000/login");
  });
});
