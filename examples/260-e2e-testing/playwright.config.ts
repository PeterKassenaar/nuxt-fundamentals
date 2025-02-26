import { defineConfig } from '@playwright/test';

// Example configuration file for playwright.
// More information: https://playwright.dev/docs/test-configuration#basic-configuration
export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000', // Ensure this matches your Nuxt app's running URL
    headless: true, // Run in headless mode; set to false if you want to see the browser window
  },
  testDir: 'tests/e2e', // Directory for storing E2E tests
});
