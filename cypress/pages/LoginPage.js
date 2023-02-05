require('cypress-xpath')

class LoginPage{

    elements={
        EmailInput: ()=>cy.get('#email'),
        Password:()=>cy.get('#password'),
        loginBtn:()=>cy.get('input[type="submit"]'),
        validateLpage:()=>cy.get('h4'),

    }

    enterUsername(mm){
        this.elements.EmailInput().type(mm);
    }
    enterPasswordLogin(){
        this.elements.Password().type('santosh537');
    }
    clickLoginBtn(){
        this.elements.loginBtn().click();
    }
    validateinvalidUser(errs){
        cy.xpath('//span/b').invoke('text').should((msg=>{
            expect(errs).equal(msg);
        }))
    }
    validateUser(er){
        this.elements.validateLpage().invoke('text').should((ar=>{
            expect(er).equal(ar);
        }));
    }

}

export const logpage = new LoginPage();