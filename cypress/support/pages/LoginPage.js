class LoginPage {

    getEmailInput(){
        return cy.get('#email');
    }

    getPasswordInput(){
        return cy.get('#password');
    }

    setEmail(email){
        this.getEmailInput().type(email);
    }

    setPassword(password){
        this.getPasswordInput().type(password);
    }

    getLoginButton(){
        return cy.get('#loginButton');
    }

    login(email, password){
        cy.log('Login');
        this.setEmail(email);
        this.setPassword(password);
        this.getLoginButton().click();
    }





    // getNewCustomerLink(){
    //     return cy.get('#newCustomerLink');
    // }

    // clickNewCustomerLink(){
    //     this.getNewCustomerLink().click();
    // }

}

export default new LoginPage();
