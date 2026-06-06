import {test,expect} from '@playwright/test';

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