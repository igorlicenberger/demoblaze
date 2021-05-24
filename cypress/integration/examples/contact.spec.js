/// <reference types="Cypress" />
const { random } = require("faker")
const faker = require("faker")
const Locators = require('../../fixtures/Locators.json')
    let userData = {
        randomEmail : faker.internet.email(),
        randomName : faker.name.firstName(),
        randomDescription : faker.name.title()
    }

describe("Demoblaze", () => {
    beforeEach("Visit demoblaze", () => {
        cy.visit('/')
        cy.url().should("contains", "https://www.demoblaze.com")
    }),

    it("Contact with cancel", () => {
        cy.get(Locators.Header.Contact).should('be.visible').click()
        cy.wait(2000)
        cy.get(Locators.Contact.Email).should('be.visible').type('test123@gmail.com')
        cy.get(Locators.Contact.Name).type('Tester')
        cy.get(Locators.Contact.Message).type('This message is use for testing ')
        cy.get(Locators.Contact.Close).should('be.visible').click()
}),

    it("Contact with send", () => {
        cy.get(Locators.Header.Contact).should('be.visible').click()
        cy.wait(2000)
        cy.get(Locators.Contact.Email).should('be.visible').type('test123@gmail.com')
        cy.get(Locators.Contact.Name).type('Tester')
        cy.get(Locators.Contact.Message).type('This message is use for testing ')
        cy.get(Locators.Contact.Send).should('be.visible').click()
}), 

    it("Contact cancel with faker", () => {
        cy.get(Locators.Header.Contact).should('be.visible').click()
        cy.get(Locators.Contact.Email).should('be.visible').type(userData.randomEmail)
        cy.get(Locators.Contact.Name).type(userData.randomName)
        cy.get(Locators.Contact.Message).type(userData.randomDescription)
        cy.get(Locators.Contact.Close).should('be.visible').click()
}),

    it.only("Contact send with faker", () => {
        cy.get(Locators.Header.Contact).click()
        cy.wait(2000)
        cy.get(Locators.Contact.Email).should('be.visible').type(userData.randomEmail)
        cy.get(Locators.Contact.Name).type(userData.randomName)
        cy.get(Locators.Contact.Message).type(userData.randomDescription)
        cy.get(Locators.Contact.Send).should('be.visible').click()
})  
})