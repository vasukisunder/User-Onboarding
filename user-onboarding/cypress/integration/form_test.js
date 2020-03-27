describe('Tests user onboarding form', function () {

    beforeEach(function() {
        cy.visit('http://localhost:3000');
    })

    it('Checks functionality of all input boxes', function () {
        cy.get('input[name="name"]')
        .type('Vasuki Sunder')
        .should('have.value', 'Vasuki Sunder');

        cy.get('input[name="email"]')
        .type('vasuki@gmail.com');

        cy.get('input[name="password"]')
        .type('password');

        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked');

        cy.get('button').click();
    })

    


})