const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const DashboardComercio = require('../lib/Dashboard/dashboardComercio.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataFpay.json');
const assert = require ('assert');


describe('Suite test Backoffice DashboardComercio', function () {

    this.timeout(50000);
    beforeEach(async () => {

        basePage = new BasePage();
        loginBackofficePage = new LoginBackoffice();
        dashboardComercio = new DashboardComercio();

               
        await basePage.getDriver();
        await basePage.visit(data.url);
        
        
    });

    afterEach(async () => {
       // await basePage.quit();
    });

    // it('Login BO whit user valid', async () => {
                   
    //         await loginBackofficePage.typeEmail(data.Admin.Email);

    //         await loginBackofficePage.typePassword(data.Admin.Password);

    //         await loginBackofficePage.clickLogin();

    //         assert.equal(getText, 'Dashboard Fpay' );
        

    // });

    it('Búsqueda por Rut del Comercio', async () => {
                   
                           
        await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typePassword(data.Admin.Password);

        await loginBackofficePage.clickLogin();

        await dashboardComercio.selectIcon(); 

        await dashboardComercio.selectListComerce();

        await dashboardComercio.typeRut(data.Comercio.Rut);

        await dashboardComercio.clickComerce();

        // await dashboardComercio.typeNameComerce(data.Comercio.nameComercio);
                  

    });

    it('Búsqueda por Nombre del Comercio', async () => {
                   
                           
        await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typePassword(data.Admin.Password);

        await loginBackofficePage.clickLogin();

        await dashboardComercio.selectIcon(); 

        await dashboardComercio.selectListComerce();

        await dashboardComercio.typeNameComerce(data.Comercio.BusinessName);

        console.log();

        await dashboardComercio.clickComerce();

        // await dashboardComercio.typeNameComerce(data.Comercio.nameComercio);
                  

    });
 });