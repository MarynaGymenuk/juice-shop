///<reference types="cypress"/>
import registrationPage from "../support/pages/RegistrationPage";
import {user} from "../support/user";

before(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');
    
    cy.visit('#/register');
});

it('Register new user', () => {
     registrationPage.register(user);
    
    cy.log('Check if login page open after registration');
    cy.location('hash').should('eq', '#/login');

    cy.log('Check success notification text');
    registrationPage.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain('Registration completed successfully. You can now log in.');
    });
});
