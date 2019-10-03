
describe('TrueCar flow', function() {
    it('some wicked use-case', function() {
        cy.visit("https://www.qa.truecardev.com/");
        cy.get("[data-qa='Home']").should("be.visible");
        expect(true).to.equal(true)
    })
  })