import {test} from '@playwright/test'

test('frames',async({page})=>{
    //to count frames in the page
    // await page.goto('https://netbanking.hdfcbank.com/netbanking/');
    // const frames= page.frameLocator('#destination_publishing_iframe_hdfcbank_0')
    // await frames.locator()

    // await page.frameLocator

    await page.goto('https://netbanking.hdfcbank.com/netbanking/');

   await page.waitForTimeout(2000);
    //find frame

    const frames = await page.frames();

    console.log("Frame Size : ",frames.length);

    const loginPage = await page.frameLocator('//frame[@name="login_page"]');

   //find the element
   const userId = await loginPage.locator('//input[@name="fldLoginUserId"]');

   await userId.fill('Kart@1992');

   await page.waitForTimeout(2000);

})


