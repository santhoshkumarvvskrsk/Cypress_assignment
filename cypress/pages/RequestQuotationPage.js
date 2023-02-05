require('cypress-xpath')

class RequestQuotationPage{
        elements={
            newQuote:()=>cy.xpath('//li[@id="newquote"]'),
        windscrnrpr:()=>cy.get('#quotation_windscreenrepair_f'),
        breakdownCover:()=>cy.get('#quotation_breakdowncover'),
        incidentval:()=>cy.get('#quotation_incidents'),
        registrationveh:()=>cy.get('#quotation_vehicle_attributes_registration'),
        annualMilage:()=>cy.get('#quotation_vehicle_attributes_mileage'),        
        estimatedval:()=>cy.get('#quotation_vehicle_attributes_value'),
        parkingLoc:()=>cy.get('#quotation_vehicle_attributes_parkinglocation'),
        stpolicyy:()=>cy.get('#quotation_vehicle_attributes_policystart_1i'),
        stpolicym:()=>cy.get('#quotation_vehicle_attributes_policystart_2i'),
        stpolicyd:()=>cy.get('#quotation_vehicle_attributes_policystart_3i'),
        savequote:()=>cy.xpath('//input[@value="Save Quotation"]')
        }
        clickOnRequestMenu(){
            this.elements.newQuote();
        }
        selectBreakdownCover(bdval){
            cy.scrollTo('bottom');
            this.elements.breakdownCover().select(bdval,{force: true});
        }
        selectwindowScreenRepair(){
            this.elements.windscrnrpr().check({force: true});
        }
        enterIncidents(invalue){
            this.elements.incidentval().type(invalue,{force: true});
        }
        enterRegisterationVal(regval){
            this.elements.registrationveh().type(regval,{force: true});
        }
        enterAnnualMilage(anval){
            this.elements.annualMilage().type(anval,{force: true})
        }
        enterEstimatedVal(estval){
            this.elements.estimatedval().type(estval,{force: true});
        }
        selectParkingLoc(pval){
            this.elements.parkingLoc().select(pval,{force: true});
        }
        enterPolicyStartDate(yy,mm,dd){
            cy.log(typeof(yy));
            cy.log(yy+"  "+mm+"  "+dd);
            this.elements.stpolicyy().select(yy,{force: true}); 
            this.elements.stpolicym().select(mm,{force: true});
            this.elements.stpolicyd().select(dd,{force: true});
        }
        clickOnSaveBtn(){
            this.elements.savequote().click({force: true});
        }
}

export const reqQuotePg = new RequestQuotationPage();
