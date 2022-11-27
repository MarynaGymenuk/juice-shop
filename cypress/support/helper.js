export default class Helper {

    getSuccessNotificationText(){
        return cy.get('.mat-simple-snack-bar-content');
    }

    clickSubmitButton(){
        cy.get('#submitButton').click();
    }

    getProductName(){
        return cy.get('.item-name');
    }

    addProductToBasket(productName){
        this.getProductName().then(products => {
            for(let i=0; i <= products.length; i++){
                if(this.getProductName === productName){
                    this.getProductName()
                    .closest('[aria-label="Add to Basket"]')
                    .click();
                }
                else {
                    cy.get('[aria-label="Next page"]').click();
                    this.addProductToBasket();
                }
            }


        })
    }


}
