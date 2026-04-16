import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { InventoryPage } from '../Pages/InventoryPage'
import { CartPage } from '../Pages/CartPage'
import { CheckoutPage } from '../Pages/CheckoutPage'

test.describe('E2E', () => {
    test.beforeEach(async ({page}) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);

        //Login
        await login.acessarSite();
        await login.login('standard_user', 'secret_sauce');

        //Adicionando item ao carrinho
        await inventory.adicionarProdutoCarrinho();
        await inventory.abrirCarrinho();
    });

    test('CT01 - Fluxo principal de compra', async({ page }) => {
       const cart = new CartPage(page);
       const checkout = new CheckoutPage(page);

       await cart.checkout();
       await checkout.preencherDados();
       await checkout.validaSucesso();
    });

    test('CT02 - Checkout sem preencher os dados', async({page}) => {
        const cart = new CartPage(page);

        await cart.checkout();
        await page.click('[data-test="continue"]')

        //Validação de erro
        await expect(page.locator('[data-test="error"]')).toContainText("First Name is required");
    });

    test('CT03 - Erro sem sobrenome', async ({page}) => {
        const cart = new CartPage(page);

        await cart.checkout();
        await page.fill('[data-test="firstName"]', 'Testador');
        await page.click('[data-test="continue"]')

        //Validação de erro
        await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');
    });
});