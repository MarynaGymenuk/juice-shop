import Helper from '../helper';

class FeedbackPage extends Helper {

    getCommentInput(){
        return cy.get('#comment');
    }

    getRatingSlider(){
        return cy.get('#rating');
    }

    getRating(){
        return cy.get('.mat-slider-thumb-label-text');
    }

    getCaptchaCode(){
        return cy.get('#captcha');
    }

    getCaptchaInput(){
        return cy.get('#captchaControl');
    }

    fillCommentInput(phrase){
        this.getCommentInput().type(phrase);
    }

    setRating(){
        this.getRatingSlider().type('{rightArrow}');
    }

    resolveCaptcha(){
        cy.log('Resolve captcha');
        this.getCaptchaCode().then(($captcha) => {
            this.getCaptchaInput()
            .type(eval($captcha.text()));
        })
    }

}

export default new FeedbackPage();
