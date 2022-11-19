class LoginPage {

    getNewCustomerLink(){
        return cy.get('#newCustomerLink');
    }

    clickNewCustomerLink(){
        this.getNewCustomerLink().click();
    }

}

export default new LoginPage();
