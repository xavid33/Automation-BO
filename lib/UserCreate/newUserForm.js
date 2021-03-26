const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class NewUserForm extends Base {

  
 // emailLocator = By.id('login_input_mail');
// passwordLocator = By.id("login_input_password");
// loginLocator = By.id("login_btn");

  async typeEmail (email) {
  await this.clear(By.id("login_input_mail"));
  await this.sendKeys(By.id("login_input_mail"), email);
    
  };

  async typePassword (password) {
    await this.clear(By.id("login_input_password"));
    await this.sendKeys(By.id("login_input_password"), password);
  };

  async clickLogin () {
    await this.click(By.id("login_btn"));
  }; 
  
  async clickSelectPais () {
    await this.click(By.id("filter_input_country"));
  };
  
  async clickMenuDisplay () {
    await this.click(By.id('MENU_DISPLAY'));
  };

  

  async selectedCreateUser () {
    await this.findElement(By.className("MuiList-root MuiMenu-list MuiList-padding"));
    await this.click(By.xpath("/html/body/div[2]/div[3]/ul/li[2]"));
        
  };

  async clickBtnCreateUser () {
    await this.findElement(By.className("MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"));
    await this.click(By.className("MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"));
        
  };
 
  async clickCloseMenuDisplay () {
    await this.click(By.xpath('/html/body/div[2]/div[1]'));
  };

  
  async typeName (nombre) {
    await this.findElement(By.name('name'));
    await this.sendKeys(By.name('name'), nombre);

  }

  async typeLastName (apellido) {
    await this.findElement(By.name('lastname'));
    await this.sendKeys(By.name('lastname'), apellido);

  }

  async selectPaisNewUSer () {
    await this.click(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.findElement(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.click(By.xpath('//*[@id="menu-country"]/div[3]/ul/li[2]'));
  };

  async selectPaisNewUSerPe () {
    await this.click(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.findElement(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.click(By.xpath('//*[@id="menu-country"]/div[3]/ul/li[3]'));
  };

  

  async typePhone (telefono) {
    await this.clear(By.name('phone'));
    await this.click(By.name("phone"));
    await this.sendKeys(By.name('phone'), telefono);
  };
  

  async selectDocType () {
    await this.click(By.xpath('//*[@id="mui-component-select-docType"]'));
    await this.findElement(By.xpath('//*[@id="menu-docType"]/div[3]/ul/li[2]'));
    await this.click(By.xpath('//*[@id="menu-docType"]/div[3]/ul/li[2]'));
  };

  async typeDocNumber (rut) {
    await this.click(By.name("docNr"));
    await this.sendKeys(By.name('docNr'), rut);
  };
  
  async typeEmail (email) {
    await this.click(By.name("email"));
    await this.sendKeys(By.name('email'), email);
  };

  async selectRol () {
    await this.click(By.id('mui-component-select-rol'));
    await this.findElement(By.xpath('//*[@id="menu-rol"]/div[3]/ul/li[5]'));
    await this.click(By.xpath('//*[@id="menu-rol"]/div[3]/ul/li[5]'));
  };

  async selectRolPe () {
    await this.click(By.id('mui-component-select-rol'));
    await this.findElement(By.xpath('//*[@id="menu-rol"]/div[3]/ul/li[4]'));
    await this.click(By.xpath('//*[@id="menu-rol"]/div[3]/ul/li[4]'));
  };

  

  async typePassword1 (password1) {
    await this.clear(By.name("password1"));
    await this.sendKeys(By.name("password1"), password1);
  };

  async EyePass () {
    await this.findElement(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[12]/div/div/div/button'));
       await this.click(By.className('MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd'));
  };
  
  
  async typePassword2 (password2) {
    await this.clear(By.name("password2"));
    await this.sendKeys(By.name("password2"), password2);
  };

  async clickBtn (){
    await this.click(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-fullWidth'));

 
  };

  async typePassword3 (password3) {
    await this.clear(By.name("password1"));
    //await this.sendKeys(By.name(Key.chord(Keys.CONTROL, "a",Key.DELETE),"122343")); 
    //await this.findElement(By.xpath('[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[12]/div/div/input').clear('122121'));
    //await this.clear(By.name("password1"));
    await this.sendKeys(By.name("password1"), password3);
  };
  
  async typePassword4 (password4) {
    await this.clear(By.name("password2"));
    await this.sendKeys(By.name("password2"), password4);
  };

  async getErrorPassword () {
    await this.waitForText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[13]/div/p'));
    let error = await this.findElement(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[13]/div/p'));
    return this.getText(error);
  }; 

 
   async getNameError () {
    return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[1]/div/p'));
        
  };

  async getLastNameError () {
    return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[2]/div/p'));
    
};

  async getPaisError () {
    return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[3]/div/p'));
  
};

  async getPhoneError () {
    return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[4]/div/p'));
  };


  async getDocTypeError () {
    return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[5]/div/p'));
 };
 
 async getDocNumberError () {
  return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[6]/div/p'));
};

async getTypeEmailError () {
  return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[7]/div/p'));
};

async getRolError () {
  return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[9]/div/p'));
};

async getPasswordError () {
  return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[12]/div/p'));
};

async getConfirmPasswordError () {
  return this.getText(By.xpath('//*[@id="NEW_USER_VIEW"]/div/div/div[2]/div/div[13]/div/p'));
};

async getSnackBarText () {
  return this.getText(By.className("MuiPaper-root MuiAlert-root MuiAlert-filledSuccess MuiPaper-elevation0"));
};

async getMailExistingError () {
  return this.getText(By.className("MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"));
};


};

module.exports = NewUserForm;
