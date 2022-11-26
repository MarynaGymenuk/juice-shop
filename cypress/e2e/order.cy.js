///<reference types="cypress"/>
import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/loginUser.json';
import addNewAddress from "../support/pages/AddNewAddressPage";
import {address} from "../support/address";
import paymentOptions from "../support/pages/PaymentOptionsPage";
import {faker} from '@faker-js/faker';

it('Order', () => {

    cy.log('Set cookie to close Welcome container');
    cy.setCookie('welcomebanner_status', 'dismiss');

    cy.visit('#/login');
    loginPage.login(user.email, user.password);
    cy.wait(1000);

    cy.log('Go to Add New Address Page');
    cy.visit('#/address/saved');
    addNewAddress.clickAddNewAddressButton();
    
    addNewAddress.addNewAddress(address);
    cy.wait(1000);
   
    cy.log('Check success notification text');
    paymentOptions.getSuccessNotificationText().then(notification => {
        expect(notification).to.contain(`The address at ${address.city} has been successfully added to your addresses.`);
    });

   
   
   
    //card

    let name = faker.name.fullName();
    let cardNumber = faker.phone.number('###########');

    cy.visit('#/saved-payment-methods');
    paymentOptions.expandAddNewCardSection();

    paymentOptions.addNewCard(name, cardNumber);

   
   

});
