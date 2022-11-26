class Header {

    getAccountIcon(){
        return cy.get('#navbarAccount');
    }

    clickAccountIcon(){
        this.getAccountIcon().click();
    }

    getYourBasketButton(){
        return cy.get('[routerlink="/basket"]');
    }

    // getLoginButton(){
    //     return cy.get('#navbarLoginButton');
    // }
    
    // clickLoginButton(){
    //     this.getLoginButton().click();
    // }



    //------Account menu items------
    getAccountMenuItem(){
        return cy.get('[aria-label="Go to user profile"]');
    }

    // getOrdersAndPaymentMenuItem(){
    // return cy.get('[aria-label="Show Privacy and Security Menu"]');
    // }

    // clickOrdersAndPaymentMenuItem(){
    //     this.getOrdersAndPaymentMenuItem().click();
    // }

    getLogoutMenuItem(){
        return cy.get('#navbarLogoutButton');
    }

 }

export default new Header();
