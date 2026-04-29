import { test, expect } from '../../fixtures/mock-fixtures';

test.describe('Testes de mock', async () => {
    test('CT01 - Validar UI com dados mockados (network interception)', async ({ mockPage }) => {
        await mockPage.goto('https://www.saucedemo.com/')
        await mockPage.fill('[data-test="username"]', 'standard_user');
        await mockPage.fill('[data-test="password"]', 'secret_sauce');
        await mockPage.click('[data-test="login-button"]');

        await mockPage.waitForURL('**/inventory.html');

        //valida dado alterado via mock
        await expect(mockPage.locator('.inventory_item_name').first()).toHaveText('Produto Mockado');
    });
});