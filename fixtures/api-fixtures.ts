import { APIRequestContext, test as base } from '@playwright/test';
import 'dotenv/config';

type ApiFixtures = {
    apiRequest: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
    apiRequest: async ({ playwright }, use) => {
        if(!process.env.API_KEY){
            throw new Error('API_KEY não definida no .env');
        }

        const requestContext = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                'x-api-key': process.env.API_KEY!,
            },
        });
        
        await use(requestContext);
    },
});

export { expect } from '@playwright/test';