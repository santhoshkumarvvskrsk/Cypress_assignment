import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { logpage } from "../../pages/LoginPage";

Given('Go to the url for logging unsuccessfully {string}',url=>{
    cy.visit(url);
});

When('User enter invalid username and password to login',()=>{
    logpage.enterUsername('testuser');
    logpage.enterPasswordLogin();
    });

Then('Click on the login button with invalid credentials',()=>{
    logpage.clickLoginBtn();
        });
 Then('Validate the user not logged in',()=>{
            cy.wait(6000);
            logpage.validateinvalidUser("Enter your Email address and password correct");
        });

Given('Go to the url for logging successfully {string}',url=>{
    cy.visit(url);
});
When('User enter username and password to login',()=>{
        cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
            logpage.enterUsername(txt.userName);
        });
        logpage.enterPasswordLogin();
    });
Then('Click on the login button to logging in',()=>{
        logpage.clickLoginBtn();
    });
Then('Validate the Login page to confirm the logging',()=>{
        cy.readFile('cypress/fixtures/userData.json').then((txt)=>{
            logpage.validateUser(txt.userName);
        });
    });