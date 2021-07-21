/// <reference types="cypress" />

// storing jwtToken
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjNjM2VkOTA3NzUzMDAxNTQ3YmQ1ZCIsIm5hbWUiOiJUZXN0ZXIiLCJpYXQiOjE2MjY1ODg0NDMsImV4cCI6MTY1ODE0NTM2OX0.YPQMR5RcHGKJcc2i6pDRVo1nBuErfGapOrAjQxAVN0M";

describe("Authenticated Profile Page Test", () => {
  beforeEach(() => {
    // Set the jwtToken to authenticate the user
    cy.then(() => {
      window.localStorage.setItem("jwtToken", token);
    });
    cy.visit("http://localhost:3000/sales");
  });

  it("Checking all titles present", () => {
    cy.contains("Revenue for the last 28 days").should("exist");
    cy.contains("Monthly Profit").should("exist");
    cy.contains("Monthly Revenue").should("exist");
    cy.contains("Monthly Sales").should("exist");
    cy.contains("Revenue (all time)").should("exist");
    cy.contains("Profit (all time)").should("exist");
    cy.contains("Revenue (year to date)").should("exist");
    cy.contains("Revenue").should("exist");
    cy.contains("Revenue (monthly)").should("exist");
    cy.contains("Profit (monthly)").should("exist");
    cy.contains("Worst selling (current month)").should("exist");
    cy.contains("Best selling (current month)").should("exist");
  });

  it("Checking revenue chart", () => {
    // check if all 4 charts are present
    cy.get("canvas").should("have.length", 4);
  });

  it("Check worst and best selling", () => {
    cy.get(".card > div").should("exist");
  });
});
