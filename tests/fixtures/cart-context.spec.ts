import { test, expect } from '../../fixtures/test-fixtures';

test('Inicia com itens no carrinho', async ({ cartWithItem }) => {
    await cartWithItem.locator('.shopping_cart_link').click();

    const items = await cartWithItem.locator('.cart_item').count();
    expect(items).toBeGreaterThan(0);
});

