import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Testes cart com fixtures', () => {
    test('CT01 - Adicionar produto ao carrinho', async ({ loggedPage }) => {
        await loggedPage.locator('.inventory_item button').first().click();
        await expect(loggedPage.locator('.shopping_cart_badge')).toHaveText('1');
    });

    test('CT02 - Remover produto do carrinho', async ({loggedPage }) => {
        const button = loggedPage.locator('.inventory_item button').first();

        await button.click(); //adicionar
        await button.click(); //remover 

        await expect(loggedPage.locator('.shopping_cart_badge')).toHaveCount(0);
    });
});