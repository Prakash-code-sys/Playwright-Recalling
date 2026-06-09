import{test,expect} from '@playwright/test';

test('webtable',async({page})=>{

    //tables
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('domcontentloaded');
    const table = await page.locator('//table')
    const size = table.count()
    const tables = await table.all()
    for (const table of tables){
        console.log(await table.textContent())
    }
    //rows
    console.log('staring of rowss....')
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('domcontentloaded');
    const row = await page.locator('//tr')
    const size1 = table.count()
    const rows = await row.all()
    for (const row of rows){
        console.log(await row.textContent())
    }
    //header
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('domcontentloaded');
    const head = await page.locator('//th')
    const size2 = table.count()
    const headings= await head.all()
    for (const head of headings){
        console.log(await head.textContent())
    }
   //data
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('domcontentloaded');
    const data = await page.locator('td')
    const size3 = table.count()
    const datas= await data.all()
    for (const data of datas){
        console.log(await data.textContent())
    }

})

test('Print specific table',async({page})=>{

    //specific table
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.waitForLoadState('domcontentloaded');
    const table = await page.locator('(//table[@id="product"])[2]')
    console.log(await table.innerText())
    //specific header
    const header = await page.locator('//th[text()="City"]')
    console.log(await header.innerText())

    //specific row 

    const row = await page.locator('(//table[@id="product"])[2]//tbody//tr[5]')
    console.log(await row.innerText())

    //specific data
    const data = await page.locator('(//table[@id="product"])[2]//tbody//tr[5]//td[3]')
    console.log(await data.innerText())
})

test('print dynamic table',async({page})=>{
    await page.goto('https://www.leafground.com/table.xhtml');

    const table = await page.locator('//table')
    const count = await table.count()
    console.log(count)

    for (let i=0;i<count;i++){
        console.log(await table.nth(i).innerText())
    }
    //headers
    const header = await page.locator('//thead[@id="form:j_idt89_head"]')
    console.log(await header.innerText())

    //rows
    const rows = await page.locator('(//tr[@data-ri="11"])[1]')
    console.log(await rows.innerText())

    //data

    const data = await page.locator('(//tr[@data-ri="11"])[1]')
    console.log(await data.innerText())


})
