import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Testes de fixture', () => {
    test('CT01 - Usuário já inicia logado', async ({ loggedPage }) => {
        await expect(loggedPage).toHaveURL(/inventory/);
    });

    test('CT02 - Listar produtos', async ({loggedPage }) => {
        const items = await loggedPage.locator('.inventory_item').count();
        expect(items).toBeGreaterThan(0);
    });

    test('CT03 - Ordenação de produtos Z-A', async ({ loggedPage }) => {
        await loggedPage.locator('select').selectOption('za');

        const items = await loggedPage.locator('.inventory_item_name').allTextContents();
        const sorted = [...items].sort().reverse();

        expect(items).toEqual(sorted);
    });
});


