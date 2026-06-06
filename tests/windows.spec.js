import {test} from'@playwright/test'

test('window',async({page,context})=>{
    await page.goto('https://www.leafground.com/window.xhtml')

    const [childPage]= await Promise.all([
        context.waitForEvent('page'),
        page.locator('//span[text()="Open"]').click()
    ])

    const total_pages= context.pages(); //array
    const totalLenght= total_pages.length

    console.log(totalLenght)

    const parentPage= total_pages[0]
    const childWindow = total_pages[1]

    await childWindow.locator('//input[@placeholder="Search..."]').fill('Hell0')
    await childWindow.waitForTimeout(3000)

    await childWindow.close()


})