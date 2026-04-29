import { test as base, Page } from '@playwright/test';

type MockFixtures = {
    mockPage: Page;
};

export const test = base.extend<MockFixtures>({
    mockPage: async ({ page }, use) => {
        
        //Interceptando resposta real da página
        await page.route('**/*.js', async (route) => {

            //Pega resposta original
            const response = await route.fetch();
            let body = await response.text();

            //Altera conteúdo (simulando backend diferente)
            body = body.replace(
                'Sauce Labs Backpack',
                'Produto Mockado'
            );

            await route.fulfill({
                response,
                body,
                headers: {
                    ...response.headers(),
                    'content-type': 'application/javascript'
                }
            });
        });

        await use(page);
    },
});

export { expect } from '@playwright/test';