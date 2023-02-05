import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";

import { editProfile } from "../../pages/EditProfileLogOutPage";

When('User click on Profile menu',()=>{
    editProfile.clickProfileMenu();
})
When('User click on Edit Profile menu',()=>{
    editProfile.clickEditMenu();
})

Then('Click on Update User',()=>{
    editProfile.clickUpdateBtn();
})

Then('Click on logout button',()=>{
    editProfile.clickLogOutBtn();
    })