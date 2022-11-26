export default class Helper {

    getSuccessNotificationText(){
        return cy.get('.mat-simple-snack-bar-content');
    }

    clickSubmitButton(){
        cy.get('#submitButton').click();
    }

}
