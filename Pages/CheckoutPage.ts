import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page){}

    async preencherDadosNormal() {
        await this.page.fill('[data-test="firstName"]', 'Testador');
        await this.page.fill('[data-test="lastName"]', 'Silva');
        await this.page.fill('[data-test="postalCode"]', '12584');
        await this.page.click('[data-test="continue"]');
        await this.page.click('[data-test="finish"]');
    }

    async preencherDadosFixture(userData: {
        firstName: string;
        lastName: string;
        postalCode: string;
    }) {
        await this.page.fill('[data-test="firstName"]', userData.firstName);
        await this.page.fill('[data-test="lastName"]', userData.lastName);
        await this.page.fill('[data-test="postalCode"]', userData.postalCode);
        await this.page.click('[data-test="continue"]');
        await this.page.click('[data-test="finish"]');
    }

    async validaSucesso(){
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!')
    }
}