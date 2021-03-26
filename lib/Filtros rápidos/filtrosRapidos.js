const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class DashboardFpay extends Base {

  
//emailLocator = By.id("login_input_mail");
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
  
  async selectPais () {
    await this.click(By.id("filter_input_country"));
    await this.findElement(By.className("MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[2]'));
  };

  async selectPaisPe () {
    await this.click(By.id("filter_input_country"));
    await this.findElement(By.className("MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[3]'));
  };
  
  async selectDocType () {
    await this.click(By.id("filter_input_search_type"));
    await this.findElement(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[2]'));
  };

  async filterDocType () {
      await this.click(By.id("filter_input_doc_type"));
      await this.findElement(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
      await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[2]'));
  };

  async selectPhone () {
    await this.click(By.id("filter_input_search_type"));
    await this.findElement(By.className("MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"));
    await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[3]'));
};


//*[@id="menu-"]/div[3]/ul/li[2]

  //*[@id="menu-"]/div[3]/ul/li[2]

  async typeRut (Rut) {
    await this.clear(By.id("filter_input_docnr"));
    await this.sendKeys(By.id("filter_input_docnr"), Rut);
  };

  async typeDni (Dni) {
    await this.clear(By.id("filter_input_docnr"));
    await this.sendKeys(By.id("filter_input_docnr"), Dni);
  };

  async typePhone (Telefono) {
    await this.clear(By.id("filter_input_docnr"));
    await this.sendKeys(By.id("filter_input_docnr"), Telefono);
  };




  async clickBuscar () {
    await this.click(By.id("FILTER_BTN"));
    
  };
  
  
  // *[@id="menu-"]/div[3]/ul/li[3]

  // async clickSelectPaisCL () {
  //   await this.findElement(By.className("MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"));
  //   await this.click(By.xpath('//*[@id="menu-"]/div[3]/ul/li[2]'));
  // };
};

module.exports = FiltrosRapidos;
