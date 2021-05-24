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

    it('Logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.wait(2000)
        cy.get(Locators.Login.Username).type('test12345@gmail.com')
        cy.get(Locators.Login.Password).type('123456')
        cy.get(Locators.Login.Loginbutton).should('be.visible').click()
        cy.get(Locators.Header.Logout).should('be.visible').click()
})
})