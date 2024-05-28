//contains methods for interacting with the homepage of the application
import HomePage from '../support/homePage'; 

//creates an object (an instance of the HomePage class)
const homePage = new HomePage(); 

describe('Login', () => {

  //runs before each test in the 'Login' test suite
  beforeEach('Login', () =>{ 
    cy.visit('/') //navigate to the base URL
  })

  it('Should login successfully with valid credentials', () => {
    //the "login" method of the "homePage" instance is called with the username and the password
    homePage.login('admin', 'admin')
    //checks if the text is present on the page
    cy.contains('Congratulations! You must have the proper credentials.');
  });

  it('Should display an error message for invalid credentials', () => {
    homePage.login('adminTest', 'adminTest')
    cy.contains('Not authorized');
  });
});
