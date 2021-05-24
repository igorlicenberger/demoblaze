/// <reference types="Cypress" />
const { random } = require("faker")
const faker = require("faker")
const Locators = require('../../fixtures/Locators.json')
    let userData = {
        randomEmail : faker.internet.email(),
        randomName : faker.name.firstName(),
        randomDescription : faker.name.title(),
        randomPassword : faker.internet.password()
    }

describe("Demoblaze", () => {
    beforeEach("Visit demoblaze", () => {
        cy.visit('/')
        cy.url().should("contains", "https://www.demoblaze.com")
    }),

    it('About us', () => {
        cy.get(Locators.Header.AboutUs).should('be.visible').click()
        // // cy.wait(2000)
        // cy.get(Locators.AboutUs.Video).should('be.visible').click()
        cy.wait(2000)
        cy.get(Locators.AboutUs.Close).click()
})
})