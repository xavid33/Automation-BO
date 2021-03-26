const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const FpayStatus = require('../lib/AccountStatus/fpayStatus.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataFpay.json');
const assert = require ('assert');


describe('Suite test Backoffice AccountStatus', function () {
	this.timeout(50000);
	
	beforeEach(async () => {
		   

		basePage = new BasePage();
		loginBackofficePage = new LoginBackoffice();
		fpayStatusPage = new FpayStatus();
			   
		await basePage.getDriver();
		await basePage.visit(data.url);
		
		
	});

	afterEach(async () => {
		//await basePage.quit();
	});
    //Payments
    it('Cancelar el desbloqueo del OTP cliente Payments', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

      let subTitle = await fpayStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Estado de Cuenta');

			await fpayStatusPage.selectPais();
	
			await fpayStatusPage.selectDocType();
	
			await fpayStatusPage.filterDocType();
	
      await fpayStatusPage.typeRut('34815127');
      
      await fpayStatusPage.clickBuscar();

      let tipo = await fpayStatusPage.typeClient(); 
  
      assert.equal(tipo, 'payments');

      locked = await fpayStatusPage.statusLocked();

      assert.equal(locked, 'BLOQUEADO');

      await fpayStatusPage.linkUnlocked();

      let alertText = await fpayStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

      await fpayStatusPage.clickCancelModalBtn();

      await fpayStatusPage.linkEnabledlocked();

           

		//   }else{
		// 	this.skip();
		// }

    });

    it('Desbloquear el estado de la clave cliente Payments', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

			await fpayStatusPage.selectPais();
	
			await fpayStatusPage.selectDocType();
	
			await fpayStatusPage.filterDocType();
	
      await fpayStatusPage.typeRut('34815127');
      
      await fpayStatusPage.clickBuscar();

      let tipo = await fpayStatusPage.typeClient(); 
  
      assert.equal(tipo, 'payments');

      // let locked = await fpayStatusPage.statusPassLocked();

      // assert.equal(locked, 'BLOQUEADO');

      let passLocked = await fpayStatusPage.statusLocked();

      assert.equal(passLocked, 'BLOQUEADO');

      await fpayStatusPage.linkPassUnlocked();

      let alertText = await fpayStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

      //await fpayStatusPage.clickCancelModalBtn();

      await fpayStatusPage.clickUnlockModalBtn();

      // let unlocked = await fpayStatusPage.statusUnlocked();

      // assert.equal(unlocked, 'DESBLOQUEADO');

      //await fpayStatusPage.linkdisableUnlocked();

                

			

		//   }else{
		// 	this.skip();
		// }

    });

    it('Cancelar el desbloqueo del OTP cliente Payments', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();

        await fpayStatusPage.selectFpayList();

        let subTitle = await fpayStatusPage.subTitleComerce();

        assert.equal(subTitle, 'Estado de Cuenta');
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('34815127');
        
        await fpayStatusPage.clickBuscar();

        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'payments');

        locked = await fpayStatusPage.statusLocked();

        assert.equal(locked, 'BLOQUEADO');

        await fpayStatusPage.linkUnlocked();

        let alertText = await fpayStatusPage.titleAlert();

        assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

        await fpayStatusPage.clickCancelModalBtn();

        await fpayStatusPage.linkEnabledlocked();
  
             
  
      //   }else{
      // 	this.skip();
      // }
  
    });

    it('Desbloquear el estado del OTP cliente Payments', async () => {
        // if(data.TipoEjecucion == 'True') {
          
          await loginBackofficePage.typeEmail(data.Admin.Email);
    
          await loginBackofficePage.typePassword(data.Admin.Password);
      
          await loginBackofficePage.clickLogin();
          
          await fpayStatusPage.selectAccountStatus();
  
          await fpayStatusPage.selectFpayList();
  
          let subTitle = await fpayStatusPage.subTitleComerce();
  
          assert.equal(subTitle, 'Estado de Cuenta');
    
          await fpayStatusPage.selectPais();
      
          await fpayStatusPage.selectDocType();
      
          await fpayStatusPage.filterDocType();
      
          await fpayStatusPage.typeRut('34815127');
          
          await fpayStatusPage.clickBuscar();
  
          let tipo = await fpayStatusPage.typeClient(); 
  
          assert.equal(tipo, 'payments');
  
          let locked = await fpayStatusPage.statusLocked();
  
          assert.equal(locked, 'BLOQUEADO');
  
          await fpayStatusPage.linkUnlocked();
  
          let alertText = await fpayStatusPage.titleAlert();
  
          assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
          await fpayStatusPage.clickUnlockModalBtn();
  
          // let unlocked = await fpayStatusPage.statusUnlocked();
  
          // assert.equal(unlocked, 'DESBLOQUEADO');
  
          //await fpayStatusPage.linkdisableUnlocked();
    
               
    
        //   }else{
        // 	this.skip();
        // }
    
    });
    //CMR
    it('Ver estado de OTP Bloqueado sin poder desbloquear cliente CMR', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        let subTitle = await fpayStatusPage.subTitleComerce();
  
        assert.equal(subTitle, 'Estado de Cuenta');
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('122713938');
        
        await fpayStatusPage.clickBuscar();

        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'cmr');
  
        locked = await fpayStatusPage.statusLocked();
  
        assert.equal(locked, 'BLOQUEADO');
  
        await fpayStatusPage.linkEnabledlocked();
  
             
  
      //   }else{
      // 	this.skip();
      // }
  
      }); 

    it('Ver estado del OTP Desbloqueado cliente CMR', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        let subTitle = await fpayStatusPage.subTitleComerce();
  
        assert.equal(subTitle, 'Estado de Cuenta');
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('176293446');
        
        await fpayStatusPage.clickBuscar();

        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'cmr');
  
        locked = await fpayStatusPage.statusLocked();
  
        assert.equal(locked, 'DESBLOQUEADO');
  
        await fpayStatusPage.linkEnabledlocked();
  
              
  
      //   }else{
      // 	this.skip();
      // }
  
      }); 

    it('Ver estado de la clave Desbloqueado cliente CMR', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('174628939');
        
        await fpayStatusPage.clickBuscar();
  
        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'cmr');
  
        // let locked = await fpayStatusPage.statusPassLocked();
  
        // assert.equal(locked, 'BLOQUEADO');
  
        let passLocked = await fpayStatusPage.statusUnlocked();
  
        assert.equal(passLocked, 'DESBLOQUEADO');
  
        await fpayStatusPage.linkdisableUnlocked();
  
                  
  
        
  
      //   }else{
      // 	this.skip();
      // }
  
      });
    //BF  
    it.skip('Ver estado de OTP Bloqueado sin poder desbloquear cliente BF', async () => {
        // if(data.TipoEjecucion == 'True') {
          
          await loginBackofficePage.typeEmail(data.Admin.Email);
    
          await loginBackofficePage.typePassword(data.Admin.Password);
      
          await loginBackofficePage.clickLogin();
          
          await fpayStatusPage.selectAccountStatus();
    
          await fpayStatusPage.selectFpayList();
    
          let subTitle = await fpayStatusPage.subTitleComerce();
    
          assert.equal(subTitle, 'Estado de Cuenta');
    
          await fpayStatusPage.selectPais();
      
          await fpayStatusPage.selectDocType();
      
          await fpayStatusPage.filterDocType();
      
          await fpayStatusPage.typeRut('');
          
          await fpayStatusPage.clickBuscar();
    
          locked = await fpayStatusPage.statusLocked();
    
          assert.equal(locked, 'BLOQUEADO');
    
          await fpayStatusPage.linkEnabledlocked();
    
               
    
        //   }else{
        // 	this.skip();
        // }
    
        });  

    it('Ver estado del OTP Desbloqueado cliente BF', async () => {
    // if(data.TipoEjecucion == 'True') {
      
      await loginBackofficePage.typeEmail(data.Admin.Email);

      await loginBackofficePage.typePassword(data.Admin.Password);
  
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

      let subTitle = await fpayStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Estado de Cuenta');

      await fpayStatusPage.selectPais();
  
      await fpayStatusPage.selectDocType();
  
      await fpayStatusPage.filterDocType();
  
      await fpayStatusPage.typeRut('130069770');
      
      await fpayStatusPage.clickBuscar();

      let tipo = await fpayStatusPage.typeClient(); 
  
      assert.equal(tipo, 'bf');

      locked = await fpayStatusPage.statusLocked();

      assert.equal(locked, 'DESBLOQUEADO');

      await fpayStatusPage.linkEnabledlocked();

            

    //   }else{
    // 	this.skip();
    // }

    }); 

    it('Ver estado de la clave Desbloqueado cliente BF', async () => {
    // if(data.TipoEjecucion == 'True') {
      
      await loginBackofficePage.typeEmail(data.Admin.Email);

      await loginBackofficePage.typePassword(data.Admin.Password);
  
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

      await fpayStatusPage.selectPais();
  
      await fpayStatusPage.selectDocType();
  
      await fpayStatusPage.filterDocType();
  
      await fpayStatusPage.typeRut('130069770');
      
      await fpayStatusPage.clickBuscar();

      let tipo = await fpayStatusPage.typeClient(); 
  
      assert.equal(tipo, 'bf');

      let passLocked = await fpayStatusPage.statusUnlocked();

      assert.equal(passLocked, 'DESBLOQUEADO');

      await fpayStatusPage.linkdisableUnlocked();

                

      

    //   }else{
    // 	this.skip();
    // }

    });

    it('Cancelar el desbloqueo del OTP cliente No Perfilado', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

      let subTitle = await fpayStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Estado de Cuenta');

			await fpayStatusPage.selectPais();
	
			await fpayStatusPage.selectDocType();
	
			await fpayStatusPage.filterDocType();
	
      await fpayStatusPage.typeRut('240872536');
      
      await fpayStatusPage.clickBuscar();

      let tipo = await fpayStatusPage.typeClient(); 
  
      assert.equal(tipo, 'bf');

      locked = await fpayStatusPage.statusLocked();

      assert.equal(locked, 'BLOQUEADO');

      await fpayStatusPage.linkUnlocked();

      let alertText = await fpayStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

      await fpayStatusPage.clickCancelModalBtn();

      await fpayStatusPage.linkEnabledlocked();

           

		//   }else{
		// 	this.skip();
		// }

    });

    it('Desbloquear el Estado del OTP cliente No Perfilado', async () => {
		// if(data.TipoEjecucion == 'True') {
			
			await loginBackofficePage.typeEmail(data.Admin.Email);

			await loginBackofficePage.typePassword(data.Admin.Password);
	
      await loginBackofficePage.clickLogin();
      
      await fpayStatusPage.selectAccountStatus();

      await fpayStatusPage.selectFpayList();

      let subTitle = await fpayStatusPage.subTitleComerce();

      assert.equal(subTitle, 'Estado de Cuenta');

			await fpayStatusPage.selectPais();
	
			await fpayStatusPage.selectDocType();
	
			await fpayStatusPage.filterDocType();
	
      await fpayStatusPage.typeRut('240872536');
      
      await fpayStatusPage.clickBuscar();

      // let name = await fpayStatusPage.getNameLast(); 

      // assert(name, 'Nombre y Apellido');

      let locked = await fpayStatusPage.statusLocked();

      assert.equal(locked, 'BLOQUEADO');

      await fpayStatusPage.linkUnlocked();

      let alertText = await fpayStatusPage.titleAlert();

      assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 

      await fpayStatusPage.clickUnlockModalBtn();

      // let unlocked = await fpayStatusPage.statusUnlocked();

      // assert.equal(unlocked, 'DESBLOQUEADO');

      //await fpayStatusPage.linkdisableUnlocked();

           

		//   }else{
		// 	this.skip();
		// }

    });

    //CIAM

    it('Desbloquear el estado de la clave cliente Payments-CIAM', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('108572019');
        
        await fpayStatusPage.clickBuscar();
  
        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'CIAM');
  
        let passLocked = await fpayStatusPage.statusLocked();
  
        assert.equal(passLocked, 'BLOQUEADO');
  
        await fpayStatusPage.linkPassUnlocked();
  
        let alertText = await fpayStatusPage.titleAlert();
  
        assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
           
        await fpayStatusPage.clickUnlockModalBtn();
  
        // let unlocked = await fpayStatusPage.statusUnlocked();
  
        // assert.equal(unlocked, 'DESBLOQUEADO');
  
        //await fpayStatusPage.linkdisableUnlocked();
  
                  
  
        
  
      //   }else{
      // 	this.skip();
      // }
  
    });

    it('Desbloquear el estado del OTP cliente Payments-CIAM', async () => {
        // if(data.TipoEjecucion == 'True') {
          
          await loginBackofficePage.typeEmail(data.Admin.Email);
    
          await loginBackofficePage.typePassword(data.Admin.Password);
      
          await loginBackofficePage.clickLogin();
          
          await fpayStatusPage.selectAccountStatus();
  
          await fpayStatusPage.selectFpayList();
  
          let subTitle = await fpayStatusPage.subTitleComerce();
  
          assert.equal(subTitle, 'Estado de Cuenta');
    
          await fpayStatusPage.selectPais();
      
          await fpayStatusPage.selectDocType();
      
          await fpayStatusPage.filterDocType();
      
          await fpayStatusPage.typeRut('108572019');
          
          await fpayStatusPage.clickBuscar();
  
          let tipo = await fpayStatusPage.typeClient(); 
  
          assert.equal(tipo, 'CIAM');
  
          let locked = await fpayStatusPage.statusLocked();
  
          assert.equal(locked, 'BLOQUEADO');
  
          await fpayStatusPage.linkUnlocked();
  
          let alertText = await fpayStatusPage.titleAlert();
  
          assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
          await fpayStatusPage.clickUnlockModalBtn();
  
          // let unlocked = await fpayStatusPage.statusUnlocked();
  
          // assert.equal(unlocked, 'DESBLOQUEADO');
  
          //await fpayStatusPage.linkdisableUnlocked();
    
               
    
        //   }else{
        // 	this.skip();
        // }
    
    });  

    it('Desbloquear el estado de la clave cliente CMR-CIAM', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('185007553');
        
        await fpayStatusPage.clickBuscar();
  
        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'CIAM');
  
        // let locked = await fpayStatusPage.statusPassLocked();
  
        // assert.equal(locked, 'BLOQUEADO');
  
        let passLocked = await fpayStatusPage.statusLocked();
  
        assert.equal(passLocked, 'BLOQUEADO');
  
        await fpayStatusPage.linkPassUnlocked();
  
        let alertText = await fpayStatusPage.titleAlert();
  
        assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
        //await fpayStatusPage.clickCancelModalBtn();
  
        await fpayStatusPage.clickUnlockModalBtn();
  
        // let unlocked = await fpayStatusPage.statusUnlocked();
  
        // assert.equal(unlocked, 'DESBLOQUEADO');
  
        //await fpayStatusPage.linkdisableUnlocked();
  
                  
  
        
  
      //   }else{
      // 	this.skip();
      // }
  
    });

    it('Desbloquear el estado del OTP cliente CMR-CIAM', async () => {
        // if(data.TipoEjecucion == 'True') {
          
          await loginBackofficePage.typeEmail(data.Admin.Email);
    
          await loginBackofficePage.typePassword(data.Admin.Password);
      
          await loginBackofficePage.clickLogin();
          
          await fpayStatusPage.selectAccountStatus();
  
          await fpayStatusPage.selectFpayList();
  
          let subTitle = await fpayStatusPage.subTitleComerce();
  
          assert.equal(subTitle, 'Estado de Cuenta');
    
          await fpayStatusPage.selectPais();
      
          await fpayStatusPage.selectDocType();
      
          await fpayStatusPage.filterDocType();
      
          await fpayStatusPage.typeRut('185007553');
          
          await fpayStatusPage.clickBuscar();
  
          let tipo = await fpayStatusPage.typeClient(); 
  
          assert.equal(tipo, 'CIAM');
  
          let locked = await fpayStatusPage.statusLocked();
  
          assert.equal(locked, 'BLOQUEADO');
  
          await fpayStatusPage.linkUnlocked();
  
          let alertText = await fpayStatusPage.titleAlert();
  
          assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
          await fpayStatusPage.clickUnlockModalBtn();
  
          // let unlocked = await fpayStatusPage.statusUnlocked();
  
          // assert.equal(unlocked, 'DESBLOQUEADO');
  
          //await fpayStatusPage.linkdisableUnlocked();
    
               
    
        //   }else{
        // 	this.skip();
        // }
    
    }); 

    it('Desbloquear el estado de la clave cliente BF-CIAM', async () => {
      // if(data.TipoEjecucion == 'True') {
        
        await loginBackofficePage.typeEmail(data.Admin.Email);
  
        await loginBackofficePage.typePassword(data.Admin.Password);
    
        await loginBackofficePage.clickLogin();
        
        await fpayStatusPage.selectAccountStatus();
  
        await fpayStatusPage.selectFpayList();
  
        await fpayStatusPage.selectPais();
    
        await fpayStatusPage.selectDocType();
    
        await fpayStatusPage.filterDocType();
    
        await fpayStatusPage.typeRut('307233363');
        
        await fpayStatusPage.clickBuscar();
  
        let tipo = await fpayStatusPage.typeClient(); 
  
        assert.equal(tipo, 'CIAM');
  
        // let locked = await fpayStatusPage.statusPassLocked();
  
        // assert.equal(locked, 'BLOQUEADO');
  
        let passLocked = await fpayStatusPage.statusLocked();
  
        assert.equal(passLocked, 'BLOQUEADO');
  
        await fpayStatusPage.linkPassUnlocked();
  
        let alertText = await fpayStatusPage.titleAlert();
  
        assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
        //await fpayStatusPage.clickCancelModalBtn();
  
        await fpayStatusPage.clickUnlockModalBtn();
  
        // let unlocked = await fpayStatusPage.statusUnlocked();
  
        // assert.equal(unlocked, 'DESBLOQUEADO');
  
        //await fpayStatusPage.linkdisableUnlocked();
  
                  
  
        
  
      //   }else{
      // 	this.skip();
      // }
  
    });

    it('Desbloquear el estado del OTP cliente BF-CIAM', async () => {
        // if(data.TipoEjecucion == 'True') {
          
          await loginBackofficePage.typeEmail(data.Admin.Email);
    
          await loginBackofficePage.typePassword(data.Admin.Password);
      
          await loginBackofficePage.clickLogin();
          
          await fpayStatusPage.selectAccountStatus();
  
          await fpayStatusPage.selectFpayList();
  
          let subTitle = await fpayStatusPage.subTitleComerce();
  
          assert.equal(subTitle, 'Estado de Cuenta');
    
          await fpayStatusPage.selectPais();
      
          await fpayStatusPage.selectDocType();
      
          await fpayStatusPage.filterDocType();
      
          await fpayStatusPage.typeRut('307233363');
          
          await fpayStatusPage.clickBuscar();
  
          let tipo = await fpayStatusPage.typeClient(); 
  
          assert.equal(tipo, 'CIAM');
  
          let locked = await fpayStatusPage.statusLocked();
  
          assert.equal(locked, 'BLOQUEADO');
  
          await fpayStatusPage.linkUnlocked();
  
          let alertText = await fpayStatusPage.titleAlert();
  
          assert.equal(alertText, '¿Estás seguro que quieres desbloquear?'); 
  
          await fpayStatusPage.clickUnlockModalBtn();
  
          // let unlocked = await fpayStatusPage.statusUnlocked();
  
          // assert.equal(unlocked, 'DESBLOQUEADO');
  
          //await fpayStatusPage.linkdisableUnlocked();
    
               
    
        //   }else{
        // 	this.skip();
        // }
    
    }); 




	   
});


//BF 167237096
