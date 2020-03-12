import { SisdaPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Sisda App', () => {
    let page: SisdaPage;

    beforeEach(() => {
        page = new SisdaPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Sisda!');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });
});
