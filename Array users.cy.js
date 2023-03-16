
const randomNum = Cypress._.random(2500, 3500)
const randomPost = Cypress._.random(5641, 7612)

describe ('Bank login application' , () => {
    it ('Login', () => {

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('#userSelect').select('Harry Potter');
        cy.contains('Login').click();
        
        //Username visibility
        cy.contains('Welcome Harry Potter !!').should('be.visible');
        
        //Deposit
        cy.contains('Deposit').click();
        cy.get('.form-control').type(randomNum);
        cy.get('form.ng-dirty > .btn').click();
        cy.wait(500)
        cy.contains('Transactions').click();
        cy.contains('Amount').should('exist');
       
        //Logout
        cy.get('.logout').get('.home').click();
        
        //Add Customer to bank manager
        cy.contains('Bank Manager Login').should('exist').click();
        cy.get('[ng-class="btnClass1"]').click();

//Get the name at the random index
// Use the random name in your test
// Generate a random index// Define an array of names

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily'];
const randomIndex = Math.floor(Math.random() * names.length);
const randomName = names[randomIndex];
cy.get(':nth-child(1) > .form-control').type(randomName);
cy.get(':nth-child(2) > .form-control').type('Sinclair');
cy.get(':nth-child(3) > .form-control').type(randomPost);
cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click();

//View Costumer List
cy.get('[ng-class="btnClass3"]').click();








        })

    })