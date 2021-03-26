//const BrowserType = require('chromedriver');
const { Builder, By, until, WebDriver, Key } = require('selenium-webdriver');
const path = require('path');
const express = require('express');
const fake = require('faker');
const fs = require('fs');
var http = require('https');
let driver = null 

class Base {    



    getDriver () {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        return driver;
            }

    driver  () {
        return driver;
    }

    visit (theUrl) {
        return driver.get(theUrl);
    }

    quit () {
        return driver.quit();
    };

    async findElements (locator) {
        await driver.wait(until.elementLocated(locator, 5000));
        let elem = await driver.findElement(locator);
      await elem.sendKeys(key.CONTROL, "a", key.DELETE);
     };

     async findElement (locator) {
        return driver.findElement(locator);
    };

    async WebElement (locator){
        return driver.findElements(locator)
    };

    async pressKeys  (locator, txt) {
        await driver.wait(until.elementLocated(locator, 5000));
        let elem = await driver.findElement(locator);
        await elem.sendKeys(txt, Key.ENTER);
    };

    async sendKeys (locator, txt) {
        await driver.wait(until.elementLocated(locator, 5000))
        await driver.findElement(locator).sendKeys(txt);
    };


    async waitForUrl (url){
        return driver.get(url);
    }
    async clear (locator) {
        await driver.wait(until.elementLocated(locator, 5000));
        let elem = await driver.findElement(locator);
        await elem.sendKeys(Key.CONTROL, "a", Key.DELETE);
        };


    async reset(locator) {
        await driver.wait(until.elementLocated(locator, 5000));
        let elem = await driver.findElement(locator);
        await elem.reset();
      }

    async getText(locator) {
        await driver.wait(until.elementLocated(locator, 5000));
        return driver.findElement(locator).getText();
    };

    async getTextE (element) {
        return element.getText();
    };

    async subTextLocator (locator) {

    };

    async setTimeout () {
     sleep(3000);
    };

    async sleep () {
        driver.sleep(5000);
    };

    // async sleep () {
    //     driver.setTimeout("5000");
    // };

    async click (locator) {
        await driver.wait(async () =>{
            try {
                await driver.findElement(locator).click();
                return true;
            } 
            catch (error) {
                //console.log(error);
                return false;
            }
        }, 10000);

    }
 
    async waitForText  (locator) {
        await driver.wait(async function () {
            try {
                let palabra = await driver.findElement(locator).getText();
                if (palabra == '') {
                    //console.log('palabra es:' + palabra);
                    return false;

                } else {
                    return true;
                }

            }
            catch (error) {
                //console.log(error);
                return false;
            }
        }, 5000);
    };

    

    async generateRut (x) {
        let suma = 0;
        let mul = 2;
        let rut = '';
        var num_aleatorio = 0;
        let tipo = '';

        do {
            num_aleatorio = Math.round(Math.random() * (99000000 - 5000000)) + 5000000;
            rut = num_aleatorio + "";
            if (rut >= 50000000) {
                tipo = "c"
            } else {
                tipo = 'p';
            }
            //console.log(tipo);
        } while (tipo != x);

        for (let i = rut.length - 1; i >= 0; i--) {
            suma = suma + rut.charAt(i) * mul;
            //console.log(suma);
            if (mul == 7) {
                mul = 2;
            }
            else {
                mul++;
            }
        }

        let res = suma % 11;
        let digito = "";

        if (res == 1) {
            digito = 'k';
        }
        else if (res == 0) {
            digito = '0';
        }
        else {
            digito = 11 - res;
        }

        let rutardo = num_aleatorio + '-' + digito;

        return rutardo;

    };

    async generateEmail () {
        fake.locale = 'es';
        let mail = await fake.internet.email();
        return mail.toLowerCase();
    };

    async updateUsersTxt (rut, email) {
        let users = '/home/david/Digital payments/BO/fif-payments-automation-backoffice/data/users.json';
        fs.appendFile(users, '"' + rut + ' - ' + email + '",\n', function (err) {
            if(err) throw err;

            //console.log('update');
            //change the value in memory object
            //serialize as JSON y and write it a file
            //fs.writeFileSync('/ruta/', Json.string)    
        });



    };

    async skip(){

    };
    
}

module.exports = Base;