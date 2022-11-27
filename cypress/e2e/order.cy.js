///<reference types="cypress"/>
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import addNewAddress from "../support/pages/AddNewAddressPage";
import {address} from "../support/address";
import paymentOptions from "../support/pages/PaymentOptionsPage";
import {user} from "../support/user";
import {faker} from '@faker-js/faker';

before(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');

    cy.visit('#/register');
    registrationPage.register(user);
});

beforeEach(() => {
    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');

    cy.visit('#/login');
    loginPage.login(user);
});

it('Add address to user', () => {
    cy.wait(1000);
    
    cy.visit('#/address/saved');
    
    addNewAddress.clickAddNewAddressButton();
    
    addNewAddress.addNewAddress(address);
    cy.wait(1000);
   
    cy.log('Check success notification text');
    paymentOptions.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain(`The address at ${address.city} has been successfully added to your addresses.`);
    });
});

it('Add card to user', () => {
    cy.wait(1000);
    let name = faker.name.fullName();
    let cardNumber = faker.random.numeric(16);
    let lastFourDigits = cardNumber.slice(12, 16);

    cy.visit('#/saved-payment-methods');
    paymentOptions.expandAddNewCardSection();
    
    paymentOptions.addNewCard(name, cardNumber);

    cy.wait(1000);
    cy.log('Check success notification text');
    paymentOptions.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain(`Your card ending with ${lastFourDigits} has been saved for your convenience.`);
    });

    cy.log('Check saved card');
    paymentOptions.getCardNumber().should('contain', `${lastFourDigits}`);
    paymentOptions.getName().should('contain', `${name}`);
});

it('Make order', () => {
    cy.visit('#/search');
    paymentOptions.addProductToBasket(' Apple Pomace ');



});
