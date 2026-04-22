import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'setup',
      testDir: './setup',
      testMatch: /.*\.setup\.ts/,
      use: {
        baseURL: 'https://www.saucedemo.com',
      },
    },
    {
      name: 'advanced-tests',
      testDir: './tests/advanced',
      dependencies: ['setup'],
      use: {
        baseURL: 'https://www.saucedemo.com',
        storageState: 'storageState.json',
      },
    },
  ],
});