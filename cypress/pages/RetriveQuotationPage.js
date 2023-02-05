require('cypress-xpath')

class RetriveQuotationPage{

    elements ={
        retrieveQuote:()=>cy.xpath('//li[@id="retrieve"]'),
        enterIdentificationNumber:()=>cy.xpath('//input[@name="id"]'),
        retrieveBtn:()=>cy.get('#getquote'),
        validateRetriveQuote:()=>cy.xpath('/html/body/table/tbody/tr[10]/td[2]'),
    }

    clickOnRetrieveQuote(){
        this.elements.retrieveQuote();
    }
    enterIdentificationNumber(idval){
        this.elements.enterIdentificationNumber().type(idval,{force:true})
    }
    clickOnRetrieveBtn(){
        this.elements.retrieveBtn().click({force:true})
    }
    verifyTheStartPolicy(ev){
        this.elements.validateRetriveQuote().invoke('text').should((txt=>{
            expect(ev).to.equal(txt);
        }))
    }
}

export const retrivequote = new RetriveQuotationPage();