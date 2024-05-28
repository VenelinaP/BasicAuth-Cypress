//defines a const variable "baseUrl" and assigns it the value
const baseUrl = 'https://the-internet.herokuapp.com';

//defines and exports a class, by "export default", this class can be imported and used in other files.
export default class HomePage {
    //This method (login) from the HomePage class. 
    login(username, password){ //It takes two parameters: username and password
        //get all anchor (<a>) elements on the page
        return cy.get('a')
        //filters the elements to find the one that contains'Basic Auth'
        .contains('Basic Auth')
       //get the value of the href attr from the filtered element
       .invoke('attr', 'href')
       //callback function that takes the href value retrieved from the previous step
       .then((href) => {
        //Inside the "".then callback", this line uses to navigate to the URL
       cy.visit(`${baseUrl}${href}`, {
        //configures basic HTTP authentication
        auth: {
          username: username,
          password: password
        },
        //tells Cypress not to fail the test if the server returns a non 2** status code.
        failOnStatusCode: false
        });
    });
    }
}
