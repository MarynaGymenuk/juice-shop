class Header {

    getAccountIcon(){
        return cy.get('#navbarAccount');
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }
    
    clickAccountIcon(){
        this.getAccountIcon().click();
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }

}

export default new Header();
