import {test} from '@playwright/test'

async function getScreenshot(page,name){
    await page.screenshot({path:`screenshots/${name}.png`})
}

test('Screenshot',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    await getScreenshot(page,'home')
})