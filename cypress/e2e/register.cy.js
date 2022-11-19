///<reference types="cypress"/>

import registrationPage from "../support/pages/RegistrationPage";
import loginPage from "../support/pages/LoginPage";
import header from "../support/pages/Header";
import {user} from "../support/user";


it('Register new user', () => {

    cy.setCookie('welcomebanner_status', 'dismiss');
    cy.visit('#/register');
    
    // header.clickAccountIcon();
    // header.clickLoginButton();
    // loginPage.clickNewCustomerLink();

    registrationPage.register(user.email, user.password, user.answer);

   






});












