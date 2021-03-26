const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class LoginVu extends Base {

  
// emailLocator = By.id(login_input_mail);
// passwordLocator = By.id("login_input_password");
// loginLocator = By.id("login_btn");

  async typeName (name) {
    await this.clear(By.name("userName"));
    await this.sendKeys(By.name("userName"), name);
  };

  async typePassword (password) {
    await this.clear(By.name("password"));
    await this.sendKeys(By.name("password"), password);
  };

  async clickLogin () {
    await this.click(By.className("btn btn-primary btn-block btn-flat"));
  };

  async getSubtitle () {
    await this.findElement(By.tagName('//*[@id="root"]/div[3]/div/div[2]/div[1]/div[1]'));
     };

  async clickContrasena () {
      await this.findElement(By.linkText("Contraseñas"));
      await this.click(By.linkText("Contraseñas"));
  };  

  async clickBtnBlock () {
    //await this.findElement(By.linkText("/html/body/div/aside/div/section/ul/li[1]/ul/li[2]/a"));
    await this.click(By.className("btn btn-app btn-app-2lines"));
  }; 

  async typeUser (user) {
    await this.clear(By.name("userName"));
    await this.sendKeys(By.name("userName"), user);
  }; 

  async clickConfirm () {
    await this.click(By.className("btn btn-warning"));
  };


  
   
};

module.exports = LoginVu;
