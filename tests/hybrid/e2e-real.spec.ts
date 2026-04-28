import { test, expect } from '../../fixtures/hybrid-fixtures';

test('E2E real: API + UI integrados', async ({ validateUser, loggedPage }) => {

    //Validação na API primeiro
    expect(validateUser.name).toBe('Testador');

    //Fluxo UI
    await loggedPage.locator('.inventory_item button').first().click();
    await loggedPage.locator('.shopping_cart_link').click();

    await loggedPage.click('[data-test="checkout"]');

    await loggedPage.fill('[data-test="firstName"]', validateUser.name);
    await loggedPage.fill('[data-test="lastName"]', 'Tester');
    await loggedPage.fill('[data-test="postalCode"]', '12345');

    await loggedPage.click('[data-test="continue"]');
    await loggedPage.click('[data-test="finish"]');

    await expect(loggedPage.locator('.complete-header'))
        .toHaveText('Thank you for your order!');
})