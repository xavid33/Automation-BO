const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const DashboardFpay = require('../lib/Dashboard/dashboardFpay.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataFpay.json');
const assert = require ('assert');


describe('Suite test Backoffice DashboardFpay', function () {
	this.timeout(50000);
	
	beforeEach(async () => {
		   

		basePage = new BasePage();
		loginBackofficePage = new LoginBackoffice();
		dashboardFpayPage = new DashboardFpay();
			   
		await basePage.getDriver();
		await basePage.visit(data.url);
		
		
	});

	afterEach(async () => {
		//await basePage.quit();
	});


	it.skip('Búsqueda de Documento por Rut Payments CL', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
			await loginBackofficePage.clickLogin();

			//basePage.sleep("2000");

			await dashboardFpayPage.selectPais();
	
			await dashboardFpayPage.selectDocType();
	
			await dashboardFpayPage.filterDocType();
	
			await dashboardFpayPage.typeRut(data.FpayCL.Rut);
	
			await dashboardFpayPage.clickBuscar();

			

		//   }else{
		// 	this.skip();
		// }

	});


	it.only('Búsqueda de Teléfono Payments CL', async () => {
			// if(data.TipoEjecucion == 'True') {
				
			await loginBackofficePage.typeEmail(data.Admin.Email);
				
			await loginBackofficePage.typePassword(data.Admin.Password);
				
			await loginBackofficePage.clickLogin();

			//await driver.sleep(5000);			
			await dashboardFpayPage.selectPais();
				
			await dashboardFpayPage.selectPhone();
				
			await dashboardFpayPage.typePhone(data.FpayCL.Telefono);
				
			await dashboardFpayPage.clickBuscar();

			// }else{
			// this.skip();
				
			// }
			
	});


	it.skip('Búsqueda de Documento por DNI Payments PE', async () => {
		// if(data.TipoEjecucion == 'True') {
				   
		
			await loginBackofficePage.typeEmail(data.Admin.Email);
	
			await loginBackofficePage.typePassword(data.Admin.Password);
	
			await loginBackofficePage.clickLogin();

			await dashboardFpayPage.selectPaisPe();
	
			await dashboardFpayPage.selectDocType();
	
			await dashboardFpayPage.filterDocType();
	
			await dashboardFpayPage.typeDni(data.FpayPE.Dni);

			
	
			await dashboardFpayPage.clickBuscar(); 

			// } else{
			// this.skip();

			// }
			
	});

	it.skip('Búsqueda de Teléfono Payments PE', async () => {
    	// if(data.TipoEjecucion == 'True') {
					   
			
			await loginBackofficePage.typeEmail(data.Admin.Email);
	
			await loginBackofficePage.typePassword(data.Admin.Password);
	
			await loginBackofficePage.clickLogin();

			await dashboardFpayPage.selectPaisPe();
	
			await dashboardFpayPage.selectPhone();
	
			await dashboardFpayPage.typePhone(data.FpayPE.Telefono);

			
	
			await dashboardFpayPage.clickBuscar(); 
	
			// } else{
			// 	this.skip();
			// }
	});
	   
});
