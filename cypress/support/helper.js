export default class Helper {

    getSuccessNotificationText() {
        return cy.get('.mat-simple-snack-bar-content');
    }

    clickSubmitButton() {
        cy.get('#submitButton').click();
    }

    clickContinueButton(){
        cy.get('button').contains('Continue').click();
    }

    getRadioButton(){
        return cy.get('mat-radio-button');
    }


//GOOD FUNC
    // addProductToBasket(productName) {
    //     cy.log(`Add ${productName} to basket`);
    //     cy.get('body').then(body => {
    //         if (body.find(`img.mat-card-image[alt='${productName}']`).length > 0) {
    //             cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click();
    //         } else {
    //             cy.get('[aria-label="Next page"]').click().then(() => {
    //             this.addProductToBasket(productName);
    //             })
    //         }
    //     })
    // }



    //---to change
    addProductToBasket(productName) {
        cy.log(`Add ${productName} to basket`);
        cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click();
        cy.wait(500);
    }









    // getProductName(index) {
    //     return cy.get(`mat-grid-list>div>mat-grid-tile:nth-child(${index})>div>mat-card>div>div:last-child>div`);
    // }

    // getAddToBasketButton(index) {
    //     return cy.get(`mat-grid-list>div>mat-grid-tile:nth-child(${index})>div>mat-card>div:last-child>button`)
    // }

    // addProductToBasket(productName) {
    //     cy.get('mat-card').then((matCard) => {
    //         if (matCard.find(`${productName}`)) {
    //             cy.contains('mat-card', `${productName}`).find('[aria-label="Add to Basket"]').click()
    //             return
    //         } else {
    //             cy.get('[aria-label="Next page"]').click().then(() => {
    //                 this.addProductToBasket(productName);
    //             })
    //         }
    //     })
    // }

    // addProductToBasket2(productName) {
    //     try {
    //         cy.get('.item-name').contains(`${productName}`).find('[aria-label="Add to Basket"]').click()
    //     } catch (e) {
    //         cy.get('[aria-label="Next page"]').click();
    //         this.addProductToBasket(productName);
    //     }
    // }


}















    // addProductToBasket(productName) {
    //     this.getProductName().then(products => {
    //         for (let i = 0; i <= products.length; i++) {
    //             //let gg = this.getProductName().invoke('text');
    //             //cy.log(gg);
    //             if (this.getProductName().contains(productName)) {
    //                 this.getProductName().contains(productName).find('[aria-label="Add to Basket"]').click();
    //             }
    //             else {
    //                 cy.get('[aria-label="Next page"]').click();
    //                 this.addProductToBasket(productName);
    //             }
    //         }


    //     })
    // }


    // addProductToBasket(productName){
    //     cy.get('body').then(body => {
    //         if(body.find(this.getProductName().))



    //     })
    // }


