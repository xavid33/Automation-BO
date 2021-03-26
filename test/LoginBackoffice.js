const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const BasePage = require ('../lib/base');
const data = require ('../data/datosLogin.json');
const assert = require ('assert');


describe('Suite test Backoffice Login', function () {

    this.timeout(50000);
    beforeEach(async () => {

        basePage = new BasePage();
        loginBackofficePage = new LoginBackoffice();
               
        await basePage.getDriver();
        await basePage.visit(data.url);
        
        
    });

    afterEach(async () => {
       // await basePage.quit();
    });

    it('Login BO whit user valid', async () => {
                   
        //await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typePassword(data.Admin.Password);

        await loginBackofficePage.clickLogin();

            
        //assert.equal(getText, 'Dashboard Fpay');
        

    });

//     it('Dashboard Fpay img', async () => {
                   
                           
//         await loginBackofficePage.typeEmail(data.Admin.Email);

//         await loginBackofficePage.typePassword(data.Admin.Password);

//         await loginBackofficePage.clickLogin();

//         await loginBackofficePage.imagenfpay(); 
                  

//     });
 });