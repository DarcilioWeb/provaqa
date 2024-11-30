/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acessa a pagina home", () =>{
    cy.visit('https://juice-shop.herokuapp.com/')
})

When("eu navego para a pagina de placar", () =>{
    cy.visit('https://juice-shop.herokuapp.com/#/score-board')
})

Then("eu devo ver o placar carregado", () =>{
    cy.contains('Challenges Solved').should('be.visible')
})