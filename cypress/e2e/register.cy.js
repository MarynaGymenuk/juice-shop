///<reference types="cypress"/>
import registrationPage from "../support/pages/RegistrationPage";
import {user} from "../support/user";

it('Register new user', () => {

    cy.setCookie('welcomebanner_status', 'dismiss');
    cy.visit('#/register');

    registrationPage.register(user.email, user.password, user.answer);
    
    cy.location('hash').should('eq', '#/login');

    registrationPage.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain('Registration completed successfully. You can now log in.');
    });

});












