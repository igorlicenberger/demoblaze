/// <reference types="Cypress" />
const Locators = require('../../fixtures/Locators.json')

describe("Demoblaze", () => {
    beforeEach("Visit demoblaze", () => {
        cy.visit('/')
        cy.url().should("contains", "https://www.demoblaze.com")
    }),

    it("Homepage", () => {
        cy.get(Locators.Header.Home).should('be.visible').click()
})
})