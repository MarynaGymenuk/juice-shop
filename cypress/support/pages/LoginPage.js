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


    //------Login------
    login(user){
        cy.log('Login');
        this.setEmail(user.email);
        this.setPassword(user.password);
        this.getLoginButton().click();
    }

}

export default new LoginPage();
