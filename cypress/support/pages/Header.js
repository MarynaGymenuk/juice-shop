class Header {

    getAccountIcon(){
        return cy.get('#navbarAccount');
    }

    // getLoginButton(){
    //     return cy.get('#navbarLoginButton');
    // }
    
    // clickLoginButton(){
    //     this.getLoginButton().click();
    // }

    getAccountMenuItem(){
        return cy.get('[aria-label="Go to user profile"]');
    }

    getLogoutMenuItem(){
        return cy.get('#navbarLogoutButton');
    }

    getYourBasketButton(){
        return cy.get('[routerlink="/basket"]');
    }

    clickAccountIcon(){
        this.getAccountIcon().click();
    }

}

export default new Header();
