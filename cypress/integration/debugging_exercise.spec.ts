import registrationPage from "../pages/registrationPage"; 

type Url = string

describe('TrueCar flow', function() {
    it('select a new car and submit a lead', function() {
        const url: Url = 'https://www.qa.truecardev.com/';
        const postalCode = '90401';

        cy.server();
        cy.route("POST", "/abp/api/leads/new_car").as("leads");

        cy.visit(url);
        cy.get("[data-qa='Home']").should("be.visible");
        cy.get("[data-test='pageIsInteractive']");
        cy.get("[data-qa='Home']").should("be.visible");

        cy.get("[data-test='homepageHeroPanelShopNewButton']").click();
        cy.get("[data-test='modelSearchOptionBrand']").should("have.class", "active");
        cy.get("[data-test='modelSearchBrand']").first().click(); 
        cy.get("[data-test='modelSelectItem']").first().click();
        cy.get("[data-test='zipCodeTextBox']").should("not.have.value")
        .type("09401");
        cy.get("[data-test='nextButton']").click();
        cy.get("[data-test='vehicleHeaderTruepriceCtaButton]").click();

        registrationPage.fillOutRegistrationForm().as("testProfileData");
        cy.wait("@leads")
          .its("status")
          .should("eq", 201);

        cy.get("[data-test='modalCloseButton']").should("be.visible").click();
        cy.url().should("contain", "/p/dashboard/");

        cy.get("[data-test='dealerHeaderText']").then(el => {
            expect(el).to.contain(this.testProfileData.first_name);
        })
    })
  })
