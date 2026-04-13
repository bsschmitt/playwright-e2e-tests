import { Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async validaLoginSucesso() {
        await expect (this.page).toHaveURL(/inventory/);
    }

    async adicionarProdutoCarrinho(){
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async validarCarrinho(qtd: string){
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(qtd);
    }

    async abrirCarrinho(){
        await this.page.locator('.shopping_cart_link').click();
    }

    async efetuarLogout(){
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('#logout_sidebar_link').click();
    }
}