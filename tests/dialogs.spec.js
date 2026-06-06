import{test,expect} from '@playwright/test';


//promise method

test('promise method',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForLoadState('load');
    
    
    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        if(dialog.type()==='alert'){
            await dialog.accept();
        }else if(dialog.type()=== 'confirm'){
            await dialog.dismiss();
        }else if (dialog.type()==='prompt'){
            await dialog.accept('Prakash')
        }
    })

    const dialog= await Promise.all([
        page.waitForEvent('dialog'),
        page.locator('#promptBtn').click()
    ])
})



