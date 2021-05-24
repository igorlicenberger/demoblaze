/// <reference types="Cypress" />
const { random } = require("faker")
const faker = require("faker")
const Locators = require('../../fixtures/Locators.json')
    let userData = {
        randomEmail : faker.internet.email(),
        randomName : faker.name.firstName(),
        randomDescription : faker.name.title(),
        randomPassword : faker.internet.password(),
        randomCountry : faker.address.county(),
        randomCity : faker.address.city(),
        randomCreditCard : faker.finance.creditCardNumber(),
        randomMonth : faker.date.month()
    }

describe("Demoblaze", () => {
    beforeEach("Visit demoblaze", () => {
        cy.visit('/')
        cy.url().should("contains", "https://www.demoblaze.com")
    }),

    it("Categories Phones ", () => {
        cy.get(Locators.Header.Categories).click()   
        cy.get(Locators.Categories.Phones).should('be.visible').click()
        cy.get(Locators.Categories.Next).should('be.visible').click()
        cy.get(Locators.Categories.SamsungS7).click()
        cy.get(Locators.Categories.Add).should('be.visible').click()
}),

    it("Categories Laptops ", () => {
        cy.get(Locators.Header.Categories).click()   
        cy.get(Locators.Categories.Next).should('be.visible').click()
        cy.get(Locators.Categories.SonyVaio).click()
        cy.get(Locators.Categories.Add).should('be.visible').click()
})
})