import { test, expect } from '../../fixtures/test-fixtures';

test('Checkout utilizando fixture de dados', async ({ cartWithItem, cartPage, checkoutPage, userData }) => {
    await cartWithItem.locator('.shopping_cart_link').click();

    await cartPage.checkout()

    await checkoutPage.preencherDadosFixture(userData);

    await checkoutPage.validaSucesso();
    await expect(cartWithItem.locator('.complete-header')).toBeVisible();
});