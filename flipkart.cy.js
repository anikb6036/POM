class flipkart{
    Url(){
        cy.visit('https://www.flipkart.com/')
    }
    scroll(){



        cy.get('[aria-label="About Us"]').click();
        cy.url({timeout:10000}).should('include','')

        cy.go('back');
        cy.get('href="tel:044-45614700"').should('be.visible','044-45614700');
        
        //cy.scrollTo('bottom');

    }
}

export default flipkart;