/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que acessa a pagina home do phptest", () =>{
    cy.visit('http://testphp.vulnweb.com/')
})

And("que eu acessa phpinfo", () =>{
    cy.visit('http://testphp.vulnweb.com/secured/phpinfo.php')
})

Then("confirma que é php info", () =>{
    cy.contains('PHP Version').should('be.visible')
})