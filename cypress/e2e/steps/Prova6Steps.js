/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que acessa a pagina home do phptest", () =>{
    cy.visit('http://testphp.vulnweb.com/')
})

And("que eu acessa CVS", () =>{
    cy.visit('http://testphp.vulnweb.com/CVS/')
})

Then("confirma tem um index", () =>{
    cy.contains('Index of').should('be.visible')
})