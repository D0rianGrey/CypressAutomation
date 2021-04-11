describe("Google", () => {
  it("First test", () => {
    cy.visit("https://www.google.com.ua");
    cy.get(".gb_4").text();
    cy.get("input[class='gLFyf gsfi']")
      .attribute("title")
      .should("contain", "Пошук");

    //cy.get('.gLFyf').attribute('clientHeight').should('eq', 34)
    //.should("contain", "https://www.google.com.ua/");
    //its("body").should("contains", "Пошук");
  });
});
