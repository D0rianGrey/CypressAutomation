describe("Google", () => {
  let a;
  let b;
  before(() => {
    cy.visit("https://www.google.com.ua");
    cy.get(".gNO89b").then((textOnButton1) => {
      cy.log(textOnButton1.val());
      a = textOnButton1.val();

      cy.get(".RNmpXc").then((textOnButton2) => {
        cy.log(textOnButton2.val());
        b = textOnButton2.val();
      });
    });
  });
  it("First test", () => {
    cy.visit("https://www.google.com.ua");
    // cy.get(".gb_4").text();
    // cy.get("input[class='gLFyf gsfi']")
    //   .attribute("title")
    //   .should("contain", "Пошук");

    //cy.xpath("//a[contains(@href,'mail')]").first().click();

    cy.log(a);
    cy.log(b);
    console.log(a);
    console.log(b);

    assert.notEqual(a, b);
    cy.get(".RNmpXc").as("button");
    cy.get("@button")
      .attribute("data-ved")
      .then((attribute) => {
        cy.log(attribute);
      });

    cy.get("@button")
      .invoke("attr", "data-ved")
      .then((text) => {
        cy.log(text);
      });

    //expect(a).equal(b);

    //cy.get(".gNO89b").val();

    //cy.get('.gLFyf').attribute('clientHeight').should('eq', 34)
    //.should("contain", "https://www.google.com.ua/");
    //its("body").should("contains", "Пошук");
  });
});
