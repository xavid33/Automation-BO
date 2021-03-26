const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class DashboardComercio extends Base {

  
// emailLocator  By.id("login_input_mail");
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
  
  async searchComerce () {
    await this.click(By.id("frut_field"));
  };

  async selectIcon () {
    await this.click(By.xpath('//*[@id="Dashboard_TAB"]/div[3]/img'));
  }; 

  async selectListComerce (){
    await this.findElement(By.id("Comercio_SUB_TAB"));
    await this.click(By.id("Comercio_SUB_TAB"));
  };
  
  async typeRut (Rut) {
   // await this.findElement(By.id("rut_field"));
    await this.clear(By.id("rut_field"));
    await this.sendKeys(By.id("rut_field"), Rut);
  };

  async clickComerce (){
    await this.click(By.className('MuiTableCell-root-219 MuiTableCell-body-221 jss255 jss257 jss259'));
  };

  async typeNameComerce (BusinessName) {
    await this.clear(By.id("rut_field"));
    await this.sendKeys(By.id("rut_field"), BusinessName);
  };
 


};

module.exports = DashboardComercio;
