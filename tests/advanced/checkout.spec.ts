import { test, expect } from '../fixtures/advanced-fixtures';

test('Fluxo com storageState', async ({ loggedPage, checkoutPage }) => {
    console.log(await loggedPage.url());
 
    await loggedPage.locator('.inventory_item button').first().click();
    await loggedPage.locator('.shopping_cart_link').click();
    await loggedPage.click('[data-test="checkout"]');

    await checkoutPage.preencherDadosNormal();

    await checkoutPage.validaSucesso();

    await expect(loggedPage.locator('.complete-header')).toBeVisible();

});

test('fluxo direto sem storage', async ({ page }) => {
  await page.goto('/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.getByText('Add to cart').first().click();
});