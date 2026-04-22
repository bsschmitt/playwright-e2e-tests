import { test, expect } from '../fixtures/advanced-fixtures';

test('Fluxo com storageState', async ({ loggedPage, checkoutPage }) => {
    await loggedPage.locator('.inventory_item button').first().click();
    await loggedPage.locator('.shopping_cart_link').click();

    await checkoutPage.preencherDadosNormal();

    await checkoutPage.validaSucesso();

    await expect(loggedPage.locator('.complete-header')).toBeVisible();

});

