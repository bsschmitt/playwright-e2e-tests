import { test, expect } from '@playwright/test';

test('Acessar inventory já logado', async ({ page }) => {
    await page.goto('/inventory');

    await expect(page).toHaveURL(/inventory/);
});