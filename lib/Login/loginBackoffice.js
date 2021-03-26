const Base = require("../base");
const { Builder, By, until, webDriver } = require("selenium-webdriver");

class LoginBackoffice extends Base {

  
// emailLocator = By.id(login_input_mail);
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

  async getSubtitle () {
    await this.findElement(By.tagName('//*[@id="root"]/div[3]/div/div[2]/div[1]/div[1]'));
     };
};

module.exports = LoginBackoffice;
