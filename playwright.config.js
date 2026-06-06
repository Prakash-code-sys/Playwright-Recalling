// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { junit } from 'node:test/reporters';


// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  retries:1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [['html'],['list'],['json'],['dot'],
            ['junit',{outputFolder:'results.json'}],
            ['allure-playwright',{outputFolder:'allure-reports'}]
],

  
  use: {
     trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    ],

 
});

