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

And("coloca o email do admin", () =>{
    cy.get('#email').type('admin@juice-sh.op')
})

And("coloca a senha do admin", () =>{
    cy.get('#password').type('admin123')
})

Then("aperta log in", () =>{
    cy.contains('button', "Log in").click()
})