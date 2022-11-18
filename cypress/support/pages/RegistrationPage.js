export default class RegistrationPage {

    //Get input fields
    getEmailInput(){
        return cy.get('#emailControl');
    }

    getPasswordInput(){
        return cy.get('#passwordControl');
    }

    getConfirmPasswordInput(){
        return cy.get('#repeatPasswordControl');
    }

    getQuestionDropdown(){
        return cy.get('[name="securityQuestion"]');
    }

    getAnswerInput(){
        return cy.get('#securityAnswerControl');
    }

    getRegisterButton(){
        return cy.get('#registerButton');
    }

    
    //Set input fields
    setEmail(email){
        this.getEmailInput().type(email);
    }

    setPassword(password){
        this.getPasswordInput().type(password);
    }

    setConfirmPassword(password){
        this.getConfirmPasswordInput().type(password);
    }

    setAnswer(answer){
        this.getAnswerInput().type(answer);
    }

}