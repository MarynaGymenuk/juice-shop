class Helper {

    getSuccessNotificationText(){
        return cy.get('.mat-simple-snack-bar-content');
    }

}

export default new Helper();
