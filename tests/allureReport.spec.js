
/* 
to install allure reports
install allure
npm i -D @playwright/test allure-playwright

install allure commandline
 npm install -g allure-commandline --save -dev

 @playwright config.js

 reporter:['allure-playwright',{outputFolder:'allure-results'}]

npx playwrigh test

allure generate <filename> -o <filename2>

allure open filename2

*/



import {test,expect} from '@playwright/test'

test('radioButtons',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForLoadState('load')
    const maleBtn = await page.locator('//input[@id="male"]')
    
    await expect(maleBtn).toBeVisible();
    await expect(maleBtn).toBeEnabled();
    await maleBtn.click();
    await expect(maleBtn).toBeChecked()
    await page.waitForTimeout(3000);


    const femaleBtn= await page.locator('//input[@id="female"]')
    await expect(femaleBtn).toBeVisible();
    await expect(femaleBtn).toBeEnabled()
    await femaleBtn.click()
    await expect(femaleBtn).toBeChecked()
})