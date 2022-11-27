import {faker} from '@faker-js/faker';
import Helper from '../helper';

class RegistrationPage extends Helper {

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
    register(user){
        cy.log('Register new user');
        this.setEmail(user.email);
        this.setPassword(user.password);
        this.setConfirmPassword(user.password);
        this.chooseOptionFromQuestionDropdown();
        this.setAnswer(user.answer);
        this.clickRegisterButton();
    }

}

export default new RegistrationPage();
