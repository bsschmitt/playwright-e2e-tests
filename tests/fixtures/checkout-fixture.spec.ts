import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Testes fixture checkout', () => {
    test('CT01 - Fluxo completo de compra com fixture', async ({ loggedPage, cartPage, checkoutPage, userData }) => {
        await loggedPage.locator('.inventory_item button').first().click();
        await loggedPage.locator('.shopping_cart_link').click();

        await cartPage.checkout();
        await checkoutPage.preencherDadosFixture(
            userData.firstName,
            userData.lastName,
            userData.postalCode
        );
        await checkoutPage.validaSucesso();

        await expect(loggedPage.locator('.complete-header')).toHaveText("Thank you for your order!");
    });
});