/* eslint-disable no-undef */
/* eslint-disable quotes */
describe("Loads the Main Page", function() {
  it("Visits the 10Books Main Page", function() {
    cy.visit("http://localhost:3000");
  });
});

describe("Prevents empty searches", function() {
  it("Clicks the submit button", function() {
    cy.get("form")
      .contains("Submit")
      .click();
    // .get("div.search_error")
    // .contains("Please Enter A Search Query");
  });
  it("Displays the correct error message", function() {
    cy.get("div.search_error").contains("Please Enter A Search Query");
  });
  it("Clears the error message upon search input", function() {
    cy.get("form")
      .type("Test")
      .get("div.search_error")
      .should("be.empty");
  });
});

describe("Handles searches with no results", function() {
  it("Displays the correct message when a search yields no results", function() {
    cy.get("input")
      .clear()
      .type("asjnasjnafa")
      .get("button")
      .contains("Submit")
      .click();
  });
  it("Collapses the empty search when the result button is clicked", function() {
    cy.get("button.results_list_toggle")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length", 1);
  });
  it("Removes all search results when the reset button is clicked", function() {
    cy.get("button")
      .contains("Clear Results")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length", 0);
  });
});

describe("Handles one search with results", function() {
  it("Fetches a list of at most ten items with a valid search", function() {
    cy.get("input")
      .type("JavaScript Testing")
      .get("button")
      .contains("Submit")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length.lessThan", 12);
  });
  it("Collapses the populated search list when the result button is clicked", function() {
    cy.get("button.results_list_toggle")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length", 1);
  });
  it("Opens the populated search list when the result button is clicked again", function() {
    cy.get("button.results_list_toggle")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length.greaterThan", 1);
  });
  it("Does not show additional information by default", function() {
    cy.get("div.ai_top_level").should("not.exist");
  });
  it("Opens additional information when the additional information button is clicked", function() {
    cy.get("button")
      .contains("Additional Information")
      .click()
      .get("div.ai_information")
      .children()
      .should("contain", "Categories: ")
      .and("contain", "Publisher: ")
      .and("contain", "Published: ");
  });
  it("Closes additional information when the close button is clicked", function() {
    cy.get("button")
      .contains("Close")
      .click()
      .get("div.ai_top_level")
      .should("not.exist");
  });
});

describe("Correctly handles a second search with results", function() {
  it("Fetches the new data", function() {
    cy.get("input")
      .type("Coding For Dummies")
      .get("button")
      .contains("Submit")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length.lessThan", 23);
  });
  it("Appends the new to data to the results list", function() {
    cy.get("div.results")
      .children()
      .first()
      .contains("Coding For Dummies");
  });
  it("Closes only the first set of data when clicking the first results button", function() {
    cy.get("button.results_list_toggle")
      .first()
      .click();
    cy.get("button.results_list_toggle")
      .closest("li")
      .contains("JavaScript Testing");
  });
  it("Closes the remaining set of data when clicking the second results button", function() {
    cy.get("button.results_list_toggle")
      .last()
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length", 2);
  });
  it("Clears all data when the reset button is clicked", function() {
    cy.get("button")
      .contains("Clear Results")
      .click()
      .get("ul.results_list")
      .children()
      .should("have.length", 0);
  });
});
