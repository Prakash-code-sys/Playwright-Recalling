import{test,expect} from '@playwright/test'

test('robot',async({page})=>{
    await page.goto('https://www.google.com/')
    const home = await page.getByText('About')
    await home.click({button:'right'})
    
    
    for (let i=0;i<2;i++){
        await page.keyboard.press('ArrowDown')
        await page.waitForTimeout(2000);

    }
    
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    const search = await page.locator('#APjFqb').fill('Pla')
    
    
    
    for (let i=0;i<2;i++){
        await page.keyboard.press('ArrowDown')
        await page.waitForTimeout(2000);

    }
    
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)


})