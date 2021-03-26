const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class ComerceStatus extends Base {

  
 // emailLocator = (By.id(('login_input_mail'));
// passwordLocator = By.id("login_input_password");
// loginLocator = By.id("login_btn");

  async typeEmail (email) {
    await this.clear(this.emailLocator);
    await this.sendKeys(this.emailLocator, email);
  };

  async typePassword (password) {
    await this.clear(By.id("login_input_password"));
    await this.sendKeys(By.id("login_input_password"), password);
  };

  async clickLogin () {
    await this.click(By.id("login_btn"));
  }; //*[@id="Estado de Cuenta_TAB"]/div[3]

  async selectAccountStatus () {
    await this.click(By.xpath('//*[@id="Estado de Cuenta_TAB"]/div[3]'));
  };

  async selectFpayList () {
    await this.click(By.id('Comercio_SUB_TAB'));  
  };
  
  async selectPais () {
    await this.click(By.id("filter_input_country"));
    await this.findElement(By.className("MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[2]'));
  };


  async selectDocType () {
    await this.click(By.id("filter_input_search_type"));
    await this.findElement(By.className("MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[4]'));
  };


  async typeAccountComerce (email) {
    await this.findElement(By.id('filter_input_docnr'));
    await this.sendKeys(By.id("filter_input_docnr"), email);

   
 
  };

  async clickBuscar () {
    await this.click(By.id("FILTER_BTN"));
    
  };

    
async statusLocked () {
    return this.getText(By.xpath('//*[@id="ACCOUNT_STATUS_FPAY"]/div[2]/div/div[1]/div[2]/div'));
                                        
                                  
};

async statusUnlocked () {
    await this.findElement(By.xpath('//*[@id="ACCOUNT_STATUS_FPAY"]/div[2]/div/div[1]/div[2]'));
    return this.getText(By.xpath('//*[@id="ACCOUNT_STATUS_FPAY"]/div[2]/div/div[1]/div[2]'));

};


async clicklinkUnlocked () {
    await this.findElement(By.className("MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall"));
    await this.click(By.className("MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall"))
 
};                                
                     

async linkdisabledUnlocked () {

    await this.findElement(By.className("MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall Mui-disabled Mui-disabled"));
    return this.getText(By.xpath('MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall Mui-disabled Mui-disabled'));

};                               

async linkEnabledlocked () {

    await this.findElement(By.className("MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall"));
    
};


async titleAlert () {
    return this.getText(By.className('title-modal'));
    
};

async clickCancelModalBtn () {       
    await this.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button'));
    await this.click(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button'));
};

async clickUnlockModalBtn () {        
    await this.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[1]/button'));
    await this.click(By.xpath('/html/body/div[2]/div[3]/div/div[1]/button'));
};

async subTitleComerce () {

    await this.findElement(By.xpath('//*[@id="root"]/div[3]/div/div[2]/div[1]/div[1]/h2'));
    return this.getText(By.xpath('//*[@id="root"]/div[3]/div/div[2]/div[1]/div[1]/h2'));
 
};

async getSnackbarComerceError () {

    return this.getText(By.xpath('//*[@id="root"]/div[2]/div/div[2]'));
};

//*[@id="root"]/div[2]/div
};

module.exports = ComerceStatus;
