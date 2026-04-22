import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
    await page.goto('/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.waitForURL(/inventory/);

    await page.context().storageState({path: 'storageState.json'});
});