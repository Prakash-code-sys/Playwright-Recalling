import {test, expect} from '@playwright/test';

test('mouse action',{tag:['@playwrightwithJenkins']},async({page})=>{

    //hover actions
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded')
    await page.getByText('Point Me').hover()
    await page.waitForTimeout(3000)

    //dbl click

    await page.locator('#field1').dblclick()
    await page.waitForTimeout(3000)

    //right click

    await page.locator('#apple').click({button:'right'})
    await page.waitForTimeout(3000)
    

    //drag and drop

    const drag= await page.locator('#draggable')
    const drop = await page.locator('#droppable')

    await drag.dragTo(drop)
    await page.waitForTimeout(3000)

    //scroll down and up

    await page.mouse.wheel(0,500)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,-500)
     await page.waitForTimeout(3000)

})