//dont have proper websites


import {test,expect} from '@playwright/test'
test('popups',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(10000)

    const newEle =await page.locator('//button[@id="PopUp"]').click()
    await page.waitForTimeout(3000)

    await newEle.close()
})