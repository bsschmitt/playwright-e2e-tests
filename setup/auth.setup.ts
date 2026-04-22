import { expect, test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
    await page.goto('/inventory.html');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');


    await page.waitForURL('**/inventory.html');
    
    await expect(page.locator('.inventory_list')).toBeVisible();

    await page.context().storageState({ path: 'storageState.json' });
});

