import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';

test.describe('Testes carrinho', () => {

    test.beforeEach(async ({page}) => {
        const login = new LoginPage(page);
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');
    });

    test('CT01 - Carrinho inicia vazio', async ({ page }) => {
        const inventory = new InventoryPage(page);
        await inventory.abrirCarrinho();
        await expect(page.locator('.cart_item')).toHaveCount(0);
    });

    test('CT02 - Adicionar item e validar no carrinho', async ({page}) => {
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.adicionarProdutoCarrinho();
        await inventory.abrirCarrinho();
        await cart.validaItemCarrinho();
    });

    test('CT03 - Remover item do carrinho', async ({page}) => {
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);
        //Adicionando item no carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.abrirCarrinho();
        
        //Validando item adicionado
        await cart.validaItemCarrinho()
        
        //Removendo item do carrinho
        await cart.removerItem();

        //Vaçidando carrinho vazio
        await cart.validaCarrinhoVazio();
    });
});

