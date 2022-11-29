export default class Helper {

    getSuccessNotificationText() {
        return cy.get('.mat-simple-snack-bar-content');
    }

    clickSubmitButton() {
        cy.get('#submitButton').click();
    }

    clickContinueButton() {
        cy.get('button').contains('Continue').click();
    }

    getRadioButton() {
        return cy.get('mat-radio-button');
    }

    addProductToBasket(productName) {
        cy.log(`Add ${productName} to basket`);
        cy.wait(500);
        cy.get('body').then(body => {
            if (body.find(`.item-name:contains(${productName})`).length > 0) {
                cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click();
            } else {
                cy.get('[aria-label="Next page"]').click().then(() => {
                    this.addProductToBasket(productName);
                })
            }
        })
    }

}
