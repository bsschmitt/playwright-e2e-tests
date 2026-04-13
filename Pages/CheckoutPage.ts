import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page){}

    async preencherDados () {
        await this.page.fill('[data-test="firstname"]', 'Testador');
        await this.page.fill('[data-test="lastname"]', 'Silva');
        await this.page.fill('[data-test="postalCode"]', '123456');
        await this.page.click('[data-test="continue"]');
        await this.page.click('[data-test="finish"]');
    }

    async validaSucesso(){
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!')
    }
}