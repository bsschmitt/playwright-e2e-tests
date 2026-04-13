import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { InventoryPage } from '../Pages/InventoryPage'
import { CartPage } from '../Pages/CartPage'
import { CheckoutPage } from '../Pages/CheckoutPage'

test.describe('E2E', () => {

    test('Fluxo completo de compra', async({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);
        const checkout = new CheckoutPage(page);

        //Login
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');

        //Adicionando item carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.abrirCarrinho();

        //Finalizando 'compra'
        await cart.checkout();
        await checkout.preencherDados();

        //Validação
        await checkout.validaSucesso();

        //Logout
        await inventory.efetuarLogout();
    })
})