import { test as base, Page } from "@playwright/test";
import { InventoryPage } from "../../Pages/InventoryPage";
import { CheckoutPage } from "../../Pages/CheckoutPage";

type Fixtures = {
    loggedPage: Page;
    inventoryPage: InventoryPage;
    checkoutPage: CheckoutPage;
    userData: {
        firstName: string;
        lastName: string;
        postalCode: string;
    };
};

export const test = base.extend<Fixtures>({
    loggedPage: async ({ page }, use) => {
        //já autenticado via storageState
        await page.goto('/inventory');
        await use(page);
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    userData: async ({}, use) => {
        await use({
            firstName: 'Bruno',
            lastName: 'Tester',
            postalCode: '12345'
        });
    },
});

export { expect } from '@playwright/test'