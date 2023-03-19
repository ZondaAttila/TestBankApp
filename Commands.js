
function addconstumer() {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

//Add Customer to bank manager
  cy.contains('Bank Manager Login').should('exist').click();
  cy.get('[ng-class="btnClass1"]').click();
  cy.get(':nth-child(1) > .form-control').type('John');
  cy.get(':nth-child(2) > .form-control').type('Doe');
  cy.get(':nth-child(3) > .form-control').type(535200);
  cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click();
}
//Open accout
function openaccount() {
  cy.get('[ng-class="btnClass2"]').click();

  //Username visibility
  cy.get('#userSelect').select('John Doe');
  cy.get('#currency').select('Dollar');
  cy.get('form.ng-dirty > button').click();

  //View Customer List
  cy.get('[ng-class="btnClass3"]').click();
  cy.contains('John Doe').should('exist');
  cy.get('.home').click();

  //Login Customer
  cy.contains('Customer Login').click();
  cy.get('#userSelect').select('John Doe');
  cy.contains('Login').click();
  cy.contains('Welcome John Doe !!').should('be.visible');
}
//Deposit
function deposit() {

  cy.contains('Deposit').click();
  cy.get('.form-control').type(1000000);
  cy.get('form.ng-dirty > .btn').click();
  cy.contains('Balance : 1000000').should('be.visible');
  cy.wait(500)
  cy.contains('Transactions').click();
  cy.contains('Amount').should('exist');
}
//Withdrawal
function withdraw() {
  cy.contains('Back').click();
  cy.contains('Withdrawl').click().get('.form-control').type('1000000');
  cy.get('form.ng-dirty > .btn').click();
  cy.contains('Balance : 0').should('be.visible');
}
export default { addconstumer, openaccount, deposit, withdraw }