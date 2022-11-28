import Helper from '../helper';
import {faker} from '@faker-js/faker';

class Order extends Helper {

    getProductNameInBasket(){
        return cy.get('mat-cell.mat-column-product');
    }

    getCheckoutButton(){
        return cy.get('#checkoutButton');
    }

    clickCheckoutButton(){
        this.getCheckoutButton().click();
    }

    selectAddress(){
        this.getRadioButton().click();
    }

    selectCard(){
        this.getRadioButton().click();
    }

    getDeliverySpeedsRadioButtons(){
        return cy.get('.mat-cell.mat-column-Selection');
    }

    chooseRandomDeliverySpeed(){
        this.getDeliverySpeedsRadioButtons().then(buttons => {
            const randomInt = faker.datatype.number({min:2, max:4});
            for(let i=1; i <= buttons.length; i++){
                cy.get(`mat-row:nth-child(${randomInt}) .mat-cell.mat-column-Selection`).click();
            }
        })
    }

    getOrderSuccessHeader(){
        return cy.get('h1');
    }

}

export default new Order();
