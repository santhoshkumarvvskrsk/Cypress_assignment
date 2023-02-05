import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { regpage } from "../../pages/RegisterUsePage";
const { faker } = require('@faker-js/faker');

var fname = faker.name.firstName();
var sname = faker.name.lastName();
var phno = faker.phone.phoneNumber('501-###-###');
var yy = faker.datatype.number({'min':'1935', 'max':'1995'});
var vy = faker.datatype.number({'min':'2014','max':'2025'})
var mm = faker.datatype.number({'min':'1', 'max':'12'});
var dd = faker.datatype.number({'min':'1', 'max':'30'});
var lp = faker.datatype.number({'min':'1', 'max':'80'});
var streetAdd = faker.address.streetAddress();
var city = faker.address.cityName();
var country = faker.address.country();
var emailId = faker.internet.email();
var pcode = faker.address.zipCode();


Given('Go to the url {string}',url=>{
    cy.visit(url);
});

When('User Click on the Register button',()=>{
    regpage.clickOnRegisterBtn();
});

Then('Validate the Register Page',()=>{
    regpage.validateRegisterPage();
});

When('User Select the Title {string}',titleVal=>{
    regpage.selectTitle(titleVal);
});

Then('Enter Firstname in the input field',()=>{
    regpage.enterFirstName(fname);
});
Then('Enter Surname in the Surname input field',()=>{
    regpage.enterSurName(sname);
});

Then('Enter Phone Number in the Phone input field',()=>{
    regpage.enterPhoneNo(phno);
});
Then('Select date, month and year from the Date of Birth',()=>{
    regpage.enterYear(yy.toString());
    regpage.enterMonth(mm.toString());
    regpage.enterDay(dd.toString());
});
Then('Select Full or Provisional {string}',ltype=>{
    regpage.selectLicenceType(ltype);
});
Then('Select Licence Period',()=>{
    regpage.selectLicencePeriod(lp.toString());
});
Then('Select Occupation from the dropdown',()=>{
    regpage.selectOccupation(mm.toString());
});
Then('Add Street Address',()=>{
    regpage.enterStreetAdd(streetAdd.replace(/[^a-zA-Z ]/g, ""));
});
Then('Add City in the input field',()=>{
    regpage.enterCityAdd(city);
});
Then('Add Country in the Country input field',()=>{
    regpage.enterCountryVal(country);
});
Then('Enter Post code in the input field',()=>{
    regpage.enterPostCode(pcode);
})
Then('Add Email in the input field',()=>{
    vy=vy.toString();
    mm=mm.toString();
    dd=dd.toString();
    cy.writeFile('cypress/fixtures/userData.json',{userName:emailId,spy:vy,spm:mm,spd:dd});
    regpage.enterEmail(emailId);
});
Then('Add Password in the pwd input field',()=>{
    cy.wait(5000);
    regpage.enterPassword();
});
Then('Enter Enter confirm password in the confirm pwd field',()=>{
    regpage.enterConfirmPwd();
});
Then('Click on the Create button',()=>{
    regpage.clickOnCreateBtn();
});





    
    
   
    

       
        
       
       
        
        
        
       
