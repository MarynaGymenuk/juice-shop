///<reference types="cypress"/>
import registrationPage from "../support/pages/RegistrationPage";
import loginPage from "../support/pages/LoginPage";
import feedbackPage from "../support/pages/FeedbackPage";
import {user} from "../support/user";
import {faker} from '@faker-js/faker';

before(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');

    cy.visit('#/register');
    registrationPage.register(user);
    
    cy.visit('#/login');
    loginPage.login(user);
});

it('Fill Customer Feedback Form and Submit', () => {
    let comment = faker.hacker.phrase();
    
    cy.wait(1000);
    cy.visit('#/contact');
  
    cy.log('Fill customer feedback form');
    feedbackPage.fillCommentInput(comment);
    feedbackPage.setRating();
    feedbackPage.getRating().should('contain', '4');
    feedbackPage.resolveCaptcha();
    feedbackPage.clickSubmitButton();

    cy.wait(1000);
    cy.log('Check success notification text');
    feedbackPage.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain('Thank you for your feedback.');
    });

});
