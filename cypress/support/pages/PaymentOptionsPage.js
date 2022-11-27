import Helper from '../helper';
import {faker} from '@faker-js/faker';

class PaymentOptions extends Helper {
    
    //------Get fields------
    expandAddNewCardSection(){
        cy.get('.mat-expansion-indicator').click();
    }

    getNameInput(){
        return cy.get('input[type="text"]:required');
    }

    getCardNumberInput(){
        return cy.get('input[type="number"]:required');
    }

    getExpiryMonthDropdown(){
        return cy.get('mat-form-field:nth-of-type(3) select');
    }

    getExpiryYearDropdown(){
        return cy.get('mat-form-field:nth-of-type(4) select');
    }

    getCardNumber(){
        return cy.get('mat-row .mat-column-Number');
    }

    getName(){
        return cy.get('mat-row .mat-column-Name');
    }
    
    getExpireDate(){
        return cy.get('mat-row .mat-column-Expiry');
    }

    //------Set fields------
    setName(name){
        this.getNameInput().type(name);
    }

    setCardNumber(cardNumber){
        this.getCardNumberInput().type(cardNumber);
    }

    chooseExpiryMonth(){
        cy.log('Choose random option from Expiry Month dropdown');
        this.getExpiryMonthDropdown().children('option').then(options => {
            const randomInt = faker.datatype.number({min:1, max:options.length});
            for(let i=1; i <= options.length; i++){
                if(i === randomInt){
                    this.getExpiryMonthDropdown().select(`${i}`);
                }
            }
        })
    }

    chooseExpiryYear(){
        cy.log('Choose random option from Expiry Year dropdown');
        this.getExpiryYearDropdown().children('option').then(() => {
            const randomInt = faker.datatype.number({min:2080, max:2099});
            for(let i=2080; i <= 2099; i++){
                if(i===randomInt){
                   this.getExpiryYearDropdown().select(`${i}`);   
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
