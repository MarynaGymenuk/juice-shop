import Helper from '../helper';
import {faker} from '@faker-js/faker';

class PaymentOptions extends Helper {
    
    expandAddNewCardSection(){
        cy.get('.mat-expansion-indicator').click();
    }

    getNameInput(){
        return cy.get('#mat-input-1');
    }

    getCardNumberInput(){
        return cy.get('#mat-input-2');
    }

    getExpiryMonthDropdown(){
        return cy.get('#mat-input-3');
    }

    getExpiryYearDropdown(){
        return cy.get('#mat-input-4');
    }




    setName(name){
        this.getNameInput().type(name);
    }

    setCardNumber(cardNumber){
        this.getCardNumberInput().type(cardNumber);
    }

    chooseExpiryMonth(){
        cy.log('Choose random option from Expiry Month dropdown');
        this.getExpiryMonthDropdown().click();
        cy.get('#mat-input-15 option[value]').then(values => {
            const randomInt = faker.datatype.number({ min: 1, max: values.length});
            for(let i=1; i <= values.length; i++){
                if(i===randomInt){
                    cy.get(`[value="${i}"`).click();
                }
            }
        })
    }

    chooseExpiryYear(){
        cy.log('Choose random option from Expiry Year dropdown');
        this.getExpiryYearDropdown().click();
        cy.get('#mat-input-16 option[value]').then(values => {
            const randomInt = faker.datatype.number({ min: 2080, max: 2099});
            for(let i=2080; i <= 2099; i++){
                if(i===randomInt){
                    cy.get(`[value="${i}"`).click();
                }
            }
        })
    }





    addNewCard(name, cardNumber){
        cy.log('Add New Card');
        this.setName(name);
        this.setCardNumber(cardNumber);
        this.chooseExpiryMonth();
        this.chooseExpiryYear();
        this.clickSubmitButton();
    }

}

export default new PaymentOptions();
