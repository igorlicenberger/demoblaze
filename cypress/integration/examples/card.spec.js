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

    it("Place Order with cancel ", () => {
        cy.get(Locators.Header.Card).click()   
        cy.get(Locators.Card.PlaceOrder).click()
        cy.get(Locators.Card.Name).type("Tester")
        cy.get(Locators.Card.Country).type("Serbia")
        cy.get(Locators.Card.City).type("Novi Sad")
        cy.get(Locators.Card.CreditCard).type("4565282435462221")
        cy.get(Locators.Card.Month).type("11")
        cy.get(Locators.Card.Year).type("22")
        cy.get(Locators.Card.Close).should('be.visible').click()
}),

    it("Place Order with purchase ", () => {
        cy.get(Locators.Header.Card).click()   
        cy.get(Locators.Card.PlaceOrder).click()
        cy.get(Locators.Card.Name).type("Tester")
        cy.get(Locators.Card.Country).type("Serbia")
        cy.get(Locators.Card.City).type("Novi Sad")
        cy.get(Locators.Card.CreditCard).type("4565282435462221")
        cy.get(Locators.Card.Month).type("11")
        cy.get(Locators.Card.Year).type("22")
        cy.get(Locators.Card.Purchase).should('be.visible').click()
}),

it("Place Order using faker and cancel ", () => {
    cy.get(Locators.Header.Card).click()   
    cy.get(Locators.Card.PlaceOrder).click()
    cy.get(Locators.Card.Name).should('be.visible').type(userData.randomName)
    cy.get(Locators.Card.Country).type(userData.randomCountry)
    cy.get(Locators.Card.City).type(userData.randomCity)
    cy.get(Locators.Card.CreditCard).should('be.visible').type(userData.randomCreditCard)
    cy.get(Locators.Card.Month).type(userData.randomMonth)
    cy.get(Locators.Card.Year).type("22")
    cy.get(Locators.Card.Close).should('be.visible').click()
})
})