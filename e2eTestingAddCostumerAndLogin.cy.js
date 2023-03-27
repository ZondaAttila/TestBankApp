
import data from "./Commands";

describe('Test Login and Add user functionalities', () => {
  it('Login', () => {

    //login
    data.addconstumer()

    //Open account
    data.openaccount()

    //  Deposit
    data.deposit()

    // Withdrawal
    data.withdraw()

    //Logout
    cy.get('.logout').get('.home').click();

  })
})


