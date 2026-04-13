import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async validaItemCarrinho() {
        await expect(this.page.locator('.inventory_item_name')).toBeVisible();
    }

    async removerItem(){
        await this.page.click('[data-test="remove-sauce-labs-backpack"]');
    }

    async validaCarrinhoVazio(){
        await expect(this.page.locator('.car_item')).toHaveCount(0);
    }

    async checkout(){
        await this.page.click('[data-test="checkout"]');
    }
}