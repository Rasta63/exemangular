import { browser, by, element } from 'protractor';

export class computerPage {

    sleep() {
      browser.driver.sleep(2000);
    }
    completeForm() {
        let model = element.all(by.id('modele'));
        let marque = element.all(by.id('Asus'));
        let type = element.all(by.id('type'));
        let category = element.all(by.id('Gaming'));
        let prixAchat = element.all(by.id('prixAchat'));
        let prixVente = element.all(by.id('prixVente'));
        model.sendKeys('test');
        marque.click();
        type.sendKeys("Portable");
        category.click();
        prixAchat.sendKeys(100);
        prixVente.sendKeys(200);
      }
}