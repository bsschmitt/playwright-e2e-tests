import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page){}

    async preencherDados(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('[data-test="firstName"]', firstName);
        await this.page.fill('[data-test="lastName"]', lastName);
        await this.page.fill('[data-test="postalCode"]', postalCode);
        await this.page.click('[data-test="continue"]');
        await this.page.click('[data-test="finish"]');
    }

    async validaSucesso(){
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!')
    }
}