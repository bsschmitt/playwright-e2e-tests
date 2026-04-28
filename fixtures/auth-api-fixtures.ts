import { test as base, APIRequestContext } from '@playwright/test';
import 'dotenv/config';
import { getAuthToken } from '../utils/auth';

type AuthApiFixtures = {
    authApiRequest: APIRequestContext;
};

export const test = base.extend<AuthApiFixtures>({
    authApiRequest: async ({ playwright }, use) => {
        
        const requestContext = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
        });

        const token = await getAuthToken(requestContext);

        const authenticatedContext = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                Authorization: `Bearer ${token}`,
                'x-api-key': process.env.API_KEY!,
            },
        });

        await use(authenticatedContext);
    },
});

export { expect } from '@playwright/test';