import { test as base, APIRequestContext , Page } from '@playwright/test';
import 'dotenv/config';

type HybridFixtures = { 
    apiContext: APIRequestContext;
    validateUser: {
        name: string;
        job: string;
    };
    loggedPage: Page;
};

export const test = base.extend<HybridFixtures>({
    // API
    apiContext: async ({ playwright }, use) => {
        const context = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
            'x-api-key': process.env.API_KEY!,
            },
        });

        await use(context);
    },

    //Valida backend reqres 
    validateUser: async ({ apiContext }, use) => {
        const response = await apiContext.post('/api/users', {
            data: {
                name: 'Testador',
                job: 'QA'
            }
        });

        const body = await response.json();

        if(response.status() !== 201) {
            throw new Error(`Erro na API: ${JSON.stringify(body)}`);
        }

        await use(body);      
    },

    // UI (saucedemo)
    loggedPage: async({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');

        await page.fill('[data-test="username"]', 'standard_user');
        await page.fill('[data-test="password"]', 'secret_sauce');
        await page.click('[data-test="login-button"]');

        await page.waitForURL('**/inventory.html');

        await use(page);
    },
});

export { expect } from '@playwright/test';