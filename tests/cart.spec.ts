import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';

test.describe('Testes carrinho', () => {

    test('Adicionar e remover item do carrinho', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        //Login
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');

        //Operações com o carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.abrirCarrinho();

        await cart.validaItemCarrinho();
        await cart.removerItem();
        await cart.validaCarrinhoVazio();
    });
});