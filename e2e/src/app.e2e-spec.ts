import { SigsdaPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Sigsda App', () => {
    let page: SigsdaPage;

    beforeEach(() => {
        page = new SigsdaPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Sigsda!');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });
});
