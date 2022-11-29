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

    clickYourBasketButton(){
        this.getYourBasketButton().click();
    }

    getYourBasketCounter(){
        return cy.get('.fa-layers-counter');
    }


    //------Account menu items------
    getAccountMenuItem(){
        return cy.get('[aria-label="Go to user profile"]');
    }

    getLogoutMenuItem(){
        return cy.get('#navbarLogoutButton');
    }

 }

export default new Header();
