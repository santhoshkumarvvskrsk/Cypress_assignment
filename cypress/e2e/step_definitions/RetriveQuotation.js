import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import {logpage} from "../../pages/LoginPage";
import {retrivequote} from "../../pages/RetriveQuotationPage";


 Then('Click on retrieve quote menu',()=>{
                // cy.log(incident_no+"uiouoijadsfkjasdlkfj");
                retrivequote.clickOnRetrieveQuote();
                cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
                    // logpage.enterUsername(txt.userName);
                    retrivequote.enterIdentificationNumber(txt.incident_no);
                });
               
                retrivequote.clickOnRetrieveBtn();

            });
 Then('Validate the Quotation',()=>{
                cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
                    // reqQuotePg.enterPolicyStartDate(txt.spy,txt.spm,txt.spm);
                    retrivequote.verifyTheStartPolicy(txt.spy.toString()+"."+txt.spm.toString()+"."+txt.spd.toString());
                })
               
            });