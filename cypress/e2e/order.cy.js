///<reference types="cypress"/>
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import addressPage from "../support/pages/AddressPage";
import paymentOptions from "../support/pages/PaymentOptionsPage";
import order from "../support/pages/Order";
import header from "../support/pages/Header";
import {address} from "../support/address";
import {user} from "../support/user";
import {faker} from '@faker-js/faker';

describe('Order', () => {
    
    before(() => {
        cy.log('Set cookie to close Welcome container');
        cy.setCookie('welcomebanner_status', 'dismiss');
    
        cy.visit('#/register');
        registrationPage.register(user);
    });
    
    beforeEach(() => {
        cy.log('Set cookie to close Welcome container');
        cy.setCookie('welcomebanner_status', 'dismiss');
    
        cy.log('Set cookie to close Cookie Consent');
        cy.setCookie('cookieconsent_status', 'dismiss');
    
        cy.visit('#/login');
        loginPage.login(user);
    });
    
    it('Add address to user', () => {
        cy.wait(1000);
        
        cy.visit('#/address/saved');
        
        addressPage.clickAddNewAddressButton();
        
        addressPage.addNewAddress(address);
        cy.wait(1000);
       
        cy.log('Check success notification text');
        addressPage.getSuccessNotificationText().then(notification => {
            expect(notification).to.contain(`The address at ${address.city} has been successfully added to your addresses.`);
        });
    });
    
    it('Add card to user', () => {
        let name = faker.name.fullName();
        let cardNumber = faker.random.numeric(16);
        let lastFourDigits = cardNumber.slice(12, 16);
        
        cy.wait(1000);
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
        let productName = 'Apple Juice (1000ml)';

        cy.visit('#/search');
        order.addProductToBasket(productName);
    
        //add check on success notification
        
        cy.log('Check basket counter');
        header.getYourBasketCounter().should('contain', '1');
    
        header.clickYourBasketButton();
    
        cy.log('Check product name in basket');
        order.getProductName().should('contain', productName);
    
        order.clickCheckoutButton();
        cy.wait(1000);

        cy.log('Select address');
        order.getRadioButton().should('exist');
        order.selectAddress();
        order.clickContinueButton();

        order.chooseRandomDeliverySpeed();
        order.clickContinueButton();

        cy.log('Select card');
        order.selectCard();
        order.clickContinueButton();
        order.clickCheckoutButton();

        cy.log('Check that product is ordered');
        header.getYourBasketCounter().should('contain', '0');
        order.getOrderSuccessHeader().should('contain', 'Thank you for your purchase!');
        order.getProductName().should('contain', productName);
        order.getQuantityInOrderSummary().should('contain', '1');
    
    });

});
