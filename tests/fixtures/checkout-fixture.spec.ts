import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Testes fixture checkout', () => {
    test('CT01 - Fluxo completo de compra com fixture', async ({ loggedPage, cartPage, checkoutPage }) => {
        await loggedPage.locator('.inventory_item button').first().click();
        await loggedPage.locator('.shopping_cart_link').click();

        await cartPage.checkout();
        await checkoutPage.preencherDados();
        await checkoutPage.validaSucesso();

        await expect(loggedPage.locator('.complete-header')).toHaveText("Thank you for your order!");
    });
});