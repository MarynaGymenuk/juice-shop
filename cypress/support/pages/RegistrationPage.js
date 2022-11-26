import {faker} from '@faker-js/faker';

class RegistrationPage {

    //------Get fields------
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

    
    //------Set fields------
    setEmail(email){
        this.getEmailInput().type(email);
    }

    setPassword(password){
        this.getPasswordInput().type(password);
    }

    setConfirmPassword(password){
        this.getConfirmPasswordInput().type(password);
    }

    chooseOptionFromQuestionDropdown(){
        cy.log('Choose random option from question dropdown');
        this.getQuestionDropdown().click();
        cy.get('[role="listbox"] mat-option').then(options => {
            const randomInt = faker.datatype.number(options.length - 1);
            for(let i=0; i < options.length; i++){
                if(i === randomInt){
                    cy.get(`#mat-option-${i}`).click();
                }
            }
        })
    }
    
    setAnswer(answer){
        this.getAnswerInput().type(answer);
    }

    clickRegisterButton(){
        this.getRegisterButton().click();
    }


    //------Register new user------
    register(email, password, answer){
        cy.log('Register new user');
        this.setEmail(email);
        this.setPassword(password);
        this.setConfirmPassword(password);
        this.chooseOptionFromQuestionDropdown();
        this.setAnswer(answer);
        this.clickRegisterButton();
    }


    //------After registration success notification------
    getSuccessNotificationText(){
        cy.log('Get success notification after registration');
        return cy.get('.mat-simple-snack-bar-content');
    }

}

export default new RegistrationPage();
