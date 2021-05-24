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

    it("Signup with cancel", () => {
        cy.get(Locators.Header.Signup).click()
        cy.wait(2000)
        cy.get(Locators.Signup.Username).type('test123@gmail.com')
        cy.get(Locators.Signup.Password).type('Tester')
        cy.get(Locators.Signup.Close).click()
}),

    it("Signup valid ", () => {
        cy.get(Locators.Header.Signup).click()
        cy.wait(2000)
        cy.get(Locators.Signup.Username).type('test123@gmail.com')
        cy.get(Locators.Signup.Password).type('Tester')
        cy.get(Locators.Signup.Signup).click()
}),

it.only("Signup with faker ", () => {
        cy.get(Locators.Header.Signup).click()
        cy.wait(2000)
        cy.get(Locators.Signup.Username).type(userData.randomName)
        cy.get(Locators.Signup.Password).type(userData.randomPassword)
        cy.get(Locators.Signup.Signup).should('be.visible').click()
})
})