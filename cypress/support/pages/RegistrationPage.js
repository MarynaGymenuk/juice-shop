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
        cy.log(`Set ${email} into Email field`);
        this.getEmailInput().type(email);
    }

    setPassword(password){
        cy.log(`Set ${password} into Password field`);
        this.getPasswordInput().type(password);
    }

    setConfirmPassword(password){
        cy.log(`Set ${password} into Confirm Password field`);
        this.getConfirmPasswordInput().type(password);
    }

    chooseOptionFromQuestionDropdown(){
        cy.log('Choose random option from question dropdown');

        this.getQuestionDropdown().click();
        cy.get('[role="listbox"] mat-option').then(options => {
            const randomInt = faker.datatype.number(options.length);
            for(let i=0; i < options.length; i++){
                if(i === randomInt){
                    cy.get(`#mat-option-${i}`).click();
                }
            }
        })
    }





    // chooseOptionFromQuestionDropdown(){
    //     cy.log('Choose random option from question dropdown');

    //     this.getQuestionDropdown().click();
    //     cy.get('[role="listbox"] mat-option').then(options => {

    
    //         const length = 3 + options.length;
    //         const randomInt = faker.datatype.number({min: 3, max: length});
    //         for(let i=0; i <= length; i++){
    //             if(i === randomInt){
    //                 cy.get(`#mat-option-${i}`).click();
    //             }
    //         }
    //     })
    // }






    
    setAnswer(answer){
        cy.log(`Set ${answer} into Answer field`);
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
        //this.clickRegisterButton();
    }

}

export default new RegistrationPage();
