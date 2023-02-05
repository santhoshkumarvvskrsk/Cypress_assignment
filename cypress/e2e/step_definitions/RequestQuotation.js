import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import {logpage} from "../../pages/LoginPage";
import {reqQuotePg} from "../../pages/RequestQuotationPage";

var incident_no;
 Then('Click on new quote menu',()=>{
    reqQuotePg.clickOnRequestMenu();
           });
Then('Select Breakdowncover to save Quotation {string}',quote=>{
    reqQuotePg.selectBreakdownCover(quote);
           });
Then('Select window screen repair option as no',()=>{
    reqQuotePg.selectwindowScreenRepair();
           });
    Then('Enter incidents to save Quotation {string}',bdc=>{
        reqQuotePg.enterIncidents(bdc);
           });
    Then('Enter Registeration details {string}',bdc=>{
        reqQuotePg.enterRegisterationVal(bdc);
           });
    Then('Enter Annual Milage details {string}',bdc=>{
        reqQuotePg.enterAnnualMilage(bdc);
           });
    Then('Enter Estimated Value of incident {string}',bdc=>{
        reqQuotePg.enterEstimatedVal(bdc);
           });
    Then('Park vehicle in the area {string}',bdc=>{
        reqQuotePg.selectParkingLoc(bdc);
           });
    Then('select start policy',()=>{
        cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
            reqQuotePg.enterPolicyStartDate(txt.spy,txt.spm,txt.spd);
        })
           });
    Then('Click on Save quoation button',()=>{
        reqQuotePg.clickOnSaveBtn();
           });
    Then('Get incident Number', ()=>{
            cy.xpath('/html/body/text()').then((theElement)=>{
               cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
                    txt.incident_no = theElement.text();
                    cy.writeFile('cypress/fixtures/userData.json',JSON.stringify(txt));
               })
            })
            cy.log(incident_no+"fjlasdkfjasdolkjsdaf");
           })