const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const ComerceStatus = require('../lib/AccountStatus/comerceStatus.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataFpay.json');
const assert = require ('assert');


describe('Suite test Backoffice AccountStatus', function () {
	this.timeout(50000);
	
	beforeEach(async () => {
		   

		basePage = new BasePage();
		loginBackofficePage = new LoginBackoffice();
		comerceStatusPage = new ComerceStatus();
			   
		await basePage.getDriver();
		await basePage.visit(data.url);
		
		
	});

	afterEach(async () => {
		//await basePage.quit();
	});

    it('Conocer estado de un comercio Bloqueado', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await comerceStatusPage.selectAccountStatus();

        await comerceStatusPage.selectFpayList();

        let subTitle = await comerceStatusPage.subTitleComerce();

        assert.equal(subTitle, 'Cuenta Comercio');
      
        await comerceStatusPage.selectPais();

        await comerceStatusPage.selectDocType();

        await comerceStatusPage.typeAccountComerce('snaider15@gmail.com');    
        
        await comerceStatusPage.clickBuscar();

        locked = await comerceStatusPage.statusLocked();

        assert.equal(locked, 'BLOQUEADO');

            

      //   }else{
      // 	this.skip();
      // }

    });

    it('Cancelar el desbloqueo de la Clave de un Comercio', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await comerceStatusPage.selectAccountStatus();

      await comerceStatusPage.selectFpayList();

      let subTitle = await comerceStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Cuenta Comercio');
    
      await comerceStatusPage.selectPais();

      await comerceStatusPage.selectDocType();

      await comerceStatusPage.typeAccountComerce('snaider15@gmail.com');    
      
      await comerceStatusPage.clickBuscar();

      locked = await comerceStatusPage.statusLocked();

      assert.equal(locked, 'BLOQUEADO');

      await comerceStatusPage.clicklinkUnlocked();

      alertText = await comerceStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
    
      await comerceStatusPage.clickCancelModalBtn();

      await comerceStatusPage.linkEnabledlocked();

            

           

		//   }else{
		// 	this.skip();
		// }

    });

    it('Desbloquear el estado de la Clave de un Comercio', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await comerceStatusPage.selectAccountStatus();

      await comerceStatusPage.selectFpayList();

      let subTitle = await comerceStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Cuenta Comercio');

      await comerceStatusPage.selectPais();

      await comerceStatusPage.selectDocType();

      await comerceStatusPage.typeAccountComerce('snaider15@gmail.com');    
      
      await comerceStatusPage.clickBuscar();

      let locked = await comerceStatusPage.statusLocked();

      assert.equal(locked, 'BLOQUEADO');

      await comerceStatusPage.clicklinkUnlocked();

      alertText = await comerceStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

      await comerceStatusPage.clickUnlockModalBtn();

      // let unlocked = await comerceStatusPage.statusUnlocked();

      // assert.equal(unlocked, 'DESBLOQUEADO');
      
      // await comerceStatusPage.linkdisabledUnlocked();


           

		//   }else{
		// 	this.skip();
		// }

    });

    it.skip('Conocer el estado de un comercio Desbloqueado', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await comerceStatusPage.selectAccountStatus();
  
        await comerceStatusPage.selectFpayList();
  
        let subTitle = await comerceStatusPage.subTitleComerce();
  
        assert.equal(subTitle, 'Cuenta Comercio');
  
        await comerceStatusPage.selectPais();
  
        await comerceStatusPage.selectDocType();
  
        await comerceStatusPage.typeAccountComerce('snaider15@gmail.com');    
        
        await comerceStatusPage.clickBuscar();
  
        let unlocked = await comerceStatusPage.statusUnlocked();
  
        assert.equal(unlocked, 'DESBLOQUEADO');
        
        //await comerceStatusPage.linkdisabledUnlocked();
  
  
             
  
      //   }else{
      // 	this.skip();
      // }
  
      });
       
    it('Validación de campos Comercio', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await comerceStatusPage.selectAccountStatus();

      await comerceStatusPage.selectFpayList();

      let subTitle = await comerceStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Cuenta Comercio');

      await comerceStatusPage.selectPais();
      
      await comerceStatusPage.selectDocType();
	
      await comerceStatusPage.typeAccountComerce('snaider@gmail.com');    
      
      await comerceStatusPage.clickBuscar();

      mensaje = await comerceStatusPage.getSnackbarComerceError();

      assert.equal(mensaje, 'Comercio no encontrado');

        

		//   }else{
		// 	this.skip();
		// }

    });
  
	   
});



