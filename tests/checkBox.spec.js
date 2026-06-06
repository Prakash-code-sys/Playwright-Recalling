import{test,expect} from "@playwright/test"

test('checkBox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForLoadState('load');
    const day=await page.locator('#sunday')
    await expect(day).toBeVisible()
    await expect(day).toBeEnabled()
    await day.check()
    await expect(day).toBeChecked()
    await page.locator('#tuesday').check()
    await page.waitForTimeout(3000)
})