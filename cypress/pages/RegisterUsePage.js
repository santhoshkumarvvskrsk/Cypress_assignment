
require('cypress-xpath')

class RegisterUserPage{
    
    elements ={
        RegisterBtn: ()=>cy.xpath('//a[@href="register.php"]'),
        titleVal:()=>cy.get('#user_title'),
        firstName:()=>cy.get('#user_firstname'),
        surName:()=>cy.get('#user_surname'),
        phoneNumber:()=>cy.get('#user_phone'),
        yearDrpdwn:()=>cy.get('#user_dateofbirth_1i'),
        monthDrpdwn:()=>cy.get('#user_dateofbirth_2i'),
        dayDrpdwn:()=>cy.get('#user_dateofbirth_3i'),
        licenceType:()=>cy.get('#licencetype_f'),
        licencePeriod:()=>cy.get('#user_licenceperiod'),
        occupationId: ()=>cy.get('#user_occupation_id'),
        streetAdd:()=>cy.get('#user_address_attributes_street'),
        cityAdd:()=>cy.get('#user_address_attributes_city'),
        countryAdd:()=>cy.get('#user_address_attributes_county'),
        postCode:()=>cy.get('#user_address_attributes_postcode'),
        emailId:()=>cy.get('#user_user_detail_attributes_email'),
        passwordCode:()=>cy.get('#user_user_detail_attributes_password'),
        confirmPassword:()=>cy.get('#user_user_detail_attributes_password_confirmation'),
        createBtn:()=>cy.xpath('//input[@value="Create"]')

    };


    clickOnRegisterBtn(){
        this.elements.RegisterBtn().click();
    }
    validateRegisterPage(){
        let er ='Sign up as a new user';
        cy.get('h1').invoke('text').should((ar=>{
            expect(er).equal(ar)
        }))
    }
    selectTitle(title){
        // cy.scrollTo('bottom');
        this.elements.titleVal().select(title,{force: true});
    }
    enterFirstName(fname){
        this.elements.firstName().type(fname,{force:true});
    }
    enterSurName(sname){
        this.elements.surName().type(sname,{force:true});
    }
    enterPhoneNo(pno){
        this.elements.phoneNumber().type(pno,{force:true});
    }
    enterYear(yy){
        this.elements.yearDrpdwn().select(yy,{force:true});
    }
    enterMonth(mm){
        this.elements.monthDrpdwn().select(mm,{force:true});
    }
    enterDay(dd){
        this.elements.dayDrpdwn().select(dd,{force:true});
    }
    selectLicenceType(lt){
        // cy.scrollTo('bottom');
        this.elements.licenceType().check(lt);
    }
    selectLicencePeriod(lp){
        this.elements.licencePeriod().select(lp,{force:true});
    }
    selectOccupation(ocp){
        this.elements.occupationId().select(ocp,{force:true});
    }
    enterStreetAdd(sa){
        this.elements.streetAdd().type(sa,{force:true});
    }
    enterCityAdd(cadd){
        this.elements.cityAdd().type(cadd,{force:true});
    }
    enterCountryVal(cty){
        this.elements.countryAdd().type(cty,{force:true});
    }
    enterPostCode(pc){
        this.elements.postCode().type(pc,{force:true});
    }
    enterEmail(em){
        this.elements.emailId().type(em,{force:true});
    }
    enterPassword(){
        this.elements.passwordCode().type('santosh537');
    }
    enterConfirmPwd(){
        cy.log('in confirm pwd function');
        this.elements.confirmPassword().type('santosh537');
    }
    clickOnCreateBtn(){
        cy.log('in last function');
        cy.log(this.elements.createBtn().should('be.visible'));
        this.elements.createBtn().click();
        
    }

}
export const regpage = new RegisterUserPage();
