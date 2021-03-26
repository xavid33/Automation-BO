const LoginBackoffice = require('../lib/Login/loginBackoffice.js');
const NewUserForm = require('../lib/UserCreate/newUserForm.js');
const BasePage = require ('../lib/base');
const data = require ('../data/dataUser.json');
const assert = require ('assert');
//const assert = require ('chai').assert;


describe('Suite test Backoffice Crear usuario', function () {
  
    this.timeout(50000);
    beforeEach(async () => {
           

        basePage = new BasePage();
        loginBackofficePage = new LoginBackoffice();
        newUserForm = new NewUserForm();
               
        await basePage.getDriver();
        await basePage.visit(data.url);
        
        
    });

    afterEach(async () => {
        //await basePage.quit();
    });

    it.only('Crear usuario para CL con rol', async () => {
       if (data.tipoEjecucion == 'true') {
                   
        await loginBackofficePage.typeEmail(data.Admin.Email);

        await loginBackofficePage.typePassword(data.Admin.Password);

        await loginBackofficePage.clickLogin();

        //await basePage.waitForUrl('/dashboard-payments');

        await newUserForm.clickMenuDisplay();

        await newUserForm.selectedCreateUser();

        //await basePage.waitForUrl('/new-user');

        await newUserForm.clickCloseMenuDisplay();

        await newUserForm.clickBtnCreateUser();

        await newUserForm.typeName(data.Agente.Name);

        await newUserForm.typeLastName(data.Agente.LastName);

        await newUserForm.selectPaisNewUSer();

        await newUserForm.typePhone(data.Agente.Phone);

        await newUserForm.selectDocType();

        let rut = await basePage.generateRut('c');

        let email = await basePage.generateEmail();

        await newUserForm.typeDocNumber(rut);

        await newUserForm.typeEmail(email);

        await basePage.updateUsersTxt(rut,email);

        await newUserForm.selectRol(); 

        await newUserForm.typePassword1(data.Agente.Password1);

        await newUserForm.typePassword2(data.Agente.Password2);

        await newUserForm.clickBtn(); 

        let mensaje = await newUserForm.getSnackBarText();

        assert.equal(mensaje, '¡Cuenta fue creada exitosamente!');

        }else{
             this.skip();
        }  


    });

    it.skip('Crear usuario con mail existente', async () => {
        if (data.tipoEjecucion == 'true') {
                    
         await loginBackofficePage.typeEmail(data.Admin.Email);
 
         await loginBackofficePage.typePassword(data.Admin.Password);
 
         await loginBackofficePage.clickLogin();
 
         //await basePage.waitForUrl('/dashboard-payments');
 
         await newUserForm.clickMenuDisplay();
 
         await newUserForm.selectedCreateUser();
 
         //await basePage.waitForUrl('/new-user');
 
         await newUserForm.clickCloseMenuDisplay();
 
         await newUserForm.clickBtnCreateUser();
 
         await newUserForm.typeName(data.Agente.Name);
 
         await newUserForm.typeLastName(data.Agente.LastName);
 
         await newUserForm.selectPaisNewUSer();
 
         await newUserForm.typePhone(data.Agente.Phone);
 
         await newUserForm.selectDocType();
 
         let rut = await basePage.generateRut('c');
 
         //let email = await basePage.generateEmail();
 
         await newUserForm.typeDocNumber(rut);
 
         await newUserForm.typeEmail('carlos49@gmail.com');
 
         //await basePage.updateUsersTxt(rut,email);
 
         await newUserForm.selectRol(); 
 
         await newUserForm.typePassword1(data.Agente.Password1);
 
         await newUserForm.typePassword2(data.Agente.Password2);
 
         await newUserForm.clickBtn(); 

         error = await newUserForm.getMailExistingError();

         assert.equal(error, 'Ya existe un usuario con el email ingresado')
 
         
 
         }else{
              this.skip();
         }  
 
 
     });

    it.skip('Crear usuario para PE con rol', async () => {
        if (data.tipoEjecucion == 'true') {
                    
         await loginBackofficePage.typeEmail(data.Admin.Email);
 
         await loginBackofficePage.typePassword(data.Admin.Password);
 
         await loginBackofficePage.clickLogin();
 
         //await basePage.waitForUrl('/dashboard-payments');
 
         await newUserForm.clickMenuDisplay();
 
         await newUserForm.selectedCreateUser();
 
         //await basePage.waitForUrl('/new-user');
 
         await newUserForm.clickCloseMenuDisplay();
 
         await newUserForm.clickBtnCreateUser();
 
         await newUserForm.typeName(data.Sac.Name);
 
         await newUserForm.typeLastName(data.Sac.LastName);
 
         await newUserForm.selectPaisNewUSerPe();
 
         await newUserForm.typePhone(data.Sac.Phone);
 
         await newUserForm.selectDocType();
 
         await newUserForm.typeDocNumber(await basePage.generateRut('c'));
 
         //await typeDocNumber(await basePage.updateUsersTxt('rut'));
 
         await newUserForm.typeEmail(await basePage.generateEmail());
 
         //let = newUserForm.typeEmail(await basePage.updateUsersTxt('email'));
 
         await newUserForm.selectRolPe(); 
 
         await newUserForm.typePassword1(data.Sac.Password1);
 
         await newUserForm.typePassword2(data.Sac.Password2);
 
         //await newUserForm.clickBtn(); 
 
         }else{
              this.skip();
         }  
 
 
     });
         
    it('Validación de campos newUser', async () => {
                   
                           
        await loginBackofficePage.typeEmail(data.Admin.Email);
 
        await loginBackofficePage.typePassword(data.Admin.Password);

        await loginBackofficePage.clickLogin();

        //await basePage.waitForUrl('/dashboard-payments');

        await newUserForm.clickMenuDisplay();

        await newUserForm.selectedCreateUser();

        //await basePage.waitForUrl('/new-user');

        await newUserForm.clickCloseMenuDisplay();

        await newUserForm.clickBtnCreateUser();

        await newUserForm.typeName('');
       
        await newUserForm.clickBtn(); 

        //await basePage.sleep(500);

        error = await newUserForm.getNameError();

        assert.equal('Nombre es obligatorio', error);

        //console.log(error);
        await newUserForm.typeName('David');

        error = await newUserForm.getLastNameError();

        assert.equal('Apellido es obligatorio', error);

        await newUserForm.typeLastName('Silva');

        error = await newUserForm.getPaisError();

        assert.equal('País es obligatorio', error);

        await newUserForm.selectPaisNewUSer();

        error = await newUserForm.getPhoneError();

        assert.equal('Teléfono es obligatorio', error);

        await newUserForm.typePhone('5691134567897');

        await newUserForm.clickBtn(); 

        error = await newUserForm.getPhoneError();

        assert.equal('Tiene que tener máximo 9 digitos', error);

        await newUserForm.typePhone(data.Agente.Phone);
      
        error = await newUserForm.getDocTypeError();

        assert.equal('Tipo de documento es obligatorio', error);

        await newUserForm.selectDocType();

        error = await newUserForm.getDocNumberError();

        assert.equal('Documento de identidad es obligatorio', error);

        await newUserForm.typeDocNumber(await basePage.generateRut('c'));

        error = await newUserForm.getTypeEmailError();

        assert.equal('Email es obligatorio', error);

        await newUserForm.typeEmail(await basePage.generateEmail());

        error = await newUserForm.getRolError();

        assert.equal('Rol es obligatorio', error);

        await newUserForm.selectRol(); 

        error = await newUserForm.getPasswordError();

        assert.equal('Contraseña es obligatoria', error);

        await newUserForm.typePassword1('100200');

        await newUserForm.typePassword2('100201');

        await newUserForm.clickBtn(); 

        error = await newUserForm.getConfirmPasswordError();

        assert.equal('Las contraseñas no coinciden', error);

        await newUserForm.typePassword2('100200');

        
        //await newUserForm.clickBtn();      

    });
});


