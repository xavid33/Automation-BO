const LoginVu = require('../lib/Vu/users.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataVu.json');
const assert = require ('assert');


describe('Suite test Backoffice Login', function () {

    this.timeout(50000);
    beforeEach(async () => {

        basePage = new BasePage();
        loginVu = new LoginVu();
               
        await basePage.getDriver();
        await basePage.visit(data.url);
        
        
    });

    afterEach(async () => {
       // await basePage.quit();
    });

    it('Login VU whit user valid', async () => {
                   
        //await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginVu.typeName(data.Admin.User);

        await loginVu.typePassword(data.Admin.Password);

        await loginVu.clickLogin();

        await loginVu.clickContrasena();

        await loginVu.clickBtnBlock();
        
        await loginVu.typeUser('34815127');

        await longinVu.clickConfirm();


            
        //assert.equal(getText, 'Dashboard Fpay');
        

    });

//     it('Dashboard Fpay img', async () => {
                   
                           
//         await loginBackofficePage.typeEmail(data.Admin.Email);

//         await loginBackofficePage.typePassword(data.Admin.Password);

//         await loginBackofficePage.clickLogin();

//         await loginBackofficePage.imagenfpay(); 
                  

//     });
 });