require('cypress-xpath')

class EditProfileLogOutPage{

    elements={
        profileMenuBtn:()=>cy.xpath('//li[@id="profile"]'),
        editMenu:()=>cy.xpath('//li[@id="editprofile"]'),
        updateUser:()=>cy.xpath('//input[@name="commit"]'),
        logoutBtn:()=>cy.xpath('//input[@value="Log out"]')

    }


    clickProfileMenu(){
        this.elements.profileMenuBtn().click({force:true})
    }
    clickEditMenu(){
        this.elements.editMenu().click({force:true});
    }
    clickUpdateBtn(){
        this.elements.updateUser().click({force:true});
    }
    clickLogOutBtn(){
        this.elements.logoutBtn().click({force: true});
    }
}

export const editProfile = new EditProfileLogOutPage();