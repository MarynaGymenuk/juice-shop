///<reference types="cypress"/>
import header from "../support/pages/Header";
import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/loginUser.json';

before(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');

    cy.visit('#/login');
});

it('Login', () => {
    loginPage.login(user.email, user.password);

    cy.log('Check if products page open after login');
    cy.location('hash').should('eq', '#/search');

    cy.log('Check if user logged in');
    header.clickAccountIcon();
    header.getAccountMenuItem().should('contain', user.email);
    header.getLogoutMenuItem().should('exist');
    header.getYourBasketButton().should('exist');
});
