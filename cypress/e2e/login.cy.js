///<reference types="cypress"/>
import header from "../support/pages/Header";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import {user} from "../support/user";

before(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');
});

it('Register new user', () => {
    cy.visit('#/register');
    registrationPage.register(user);

    cy.log('Check if login page open after registration');
    cy.location('hash').should('eq', '#/login');
});

it('Login with previously registered user', () => {
    loginPage.login(user);

    cy.log('Check if products page open after login');
    cy.location('hash').should('eq', '#/search');

    cy.log('Check if user logged in');
    header.clickAccountIcon();
    header.getAccountMenuItem().should('contain', user.email);
    header.getLogoutMenuItem().should('exist');
    header.getYourBasketButton().should('exist');
});
