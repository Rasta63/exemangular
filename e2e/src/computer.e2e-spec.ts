import {browser, element, logging, by} from 'protractor';
import {computerPage} from './computer.po';

describe('Teste de l\'ordinateru',()=>{
    let page : computerPage;
    let nbComputer : number;

    beforeEach(()=>{
        page = new computerPage();
        browser.get('/');
        page.sleep();
    });

    it('Recherche le lien d\'ajout d\'un ordinateur et clique dessus',()=>{
        element.all(by.css('.computerLine')).then(totalRows =>{
            this.nbComputer = totalRows.length;
            element(by.css('#addComputer')).click();
            page.sleep();
            expect(browser.driver.getCurrentUrl()).toContain('/add');
        });
        page.sleep();
    });

    it('Test de l\'ajout d\'un ordinateur à patir du formulaire', ()=>{
        browser.get('/add');
        page.completeForm();
        page.sleep();
        let submitBtn = element.all(by.css('#submitBtn'));
        submitBtn.click().then(fn =>{
            element.all(by.css('.computerLine')).then(totalNewARows => {
                expect(totalNewARows.length).toEqual((this.nbComputer +=1));
                page.sleep();
            });
        });
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });

});