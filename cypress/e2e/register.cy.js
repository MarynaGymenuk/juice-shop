///<reference types="cypress"/>

import registrationPage from "../support/pages/RegistrationPage";
import {user} from "../support/user";


it('Register new user', () => {

    cy.setCookie('welcomebanner_status', 'dismiss');
    cy.visit('#/register');

    registrationPage.register(user.email, user.password, user.answer);




    
    // registrationPage.getSuccessNotificationContainer().then(notification => {
    //     registrationPage.getSuccessNotificationText().should('contain', 'Registration completed successfully. You can now log in.');
    // });


    
    registrationPage.getSuccessNotificationText().should('contain', 'Registration completed successfully. You can now log in.');




});












