class AddNewAddress {
    
    getAddNewAddressButton(){
        return cy.get('[aria-label="Add a new address"] .mat-button-wrapper');
    }

    clickAddNewAddressButton(){
        this.getAddNewAddressButton().click();
    }


    //------Get fields------
    getCountryInput(){
        return cy.get('[placeholder*="country"]');
    }

    getNameInput(){
        return cy.get('[placeholder*="name"]');
    }

    getMobileNumberInput(){
        return cy.get('[placeholder*="number"]');
    }

    getZipCodeInput(){
        return cy.get('[placeholder*="code"]');
    }

    getAddressInput(){
        return cy.get('[placeholder*="address"]');
    }

    getCityInput(){
        return cy.get('[placeholder*="city"]');
    }

    getStateInput(){
        return cy.get('[placeholder*="state"]');
    }

    getSubmitButton(){
        return cy.get('#submitButton');
    }


    //------Set fields------
    setCountry(country){
        this.getCountryInput().type(country);
    }

    setName(name){
        this.getNameInput().type(name);
    }

    setMobileNumber(number){
        this.getMobileNumberInput().type(number);
    }

    setZipCode(code){
        this.getZipCodeInput().type(code);
    }

    setAddress(address){
        this.getAddressInput().type(address);
    }

    setCity(city){
        this.getCityInput().type(city);
    }

    setState(state){
        this.getStateInput().type(state);
    }


    //------Fill Add New Address form and submit------
    addNewAddress(address){
        cy.log('Fill Add New Address form and submit');
        this.setCountry(address.country);
        this.setName(address.name);
        this.setMobileNumber(address.number);
        this.setZipCode(address.code);
        this.setAddress(address.address);
        this.setCity(address.city);
        this.setState(address.state);
        this.getSubmitButton().click();
    }

}

export default new AddNewAddress();
