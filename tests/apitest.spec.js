// import{test,expect} from '@playwright/test'
// let userid="prakm1999";
// let graph="cycle-2"
// let date="20260604"
// let quantity="20"

// test('delete a user ',async({request})=>{
//  const response= await request.delete('https://pixe.la/v1/users/prakm1999',
//   {
    
//     headers:{"X-USER-TOKEN":"env@Learning"},
//   })
//   const body = await response.json()
//   await expect(response.status()).toBe(200)

// })
// test('create a user',async({request})=>{

//    const response= await request.post('https://pixe.la/v1/users',
//                       {
//                         data:{
                            
//                                 "token":"env@Learning", 
//                                 "username":userid, 
//                                 "agreeTermsOfService":"yes", 
//                                 "notMinor":"yes", 
//                                 "thanksCode":"ThisIsThanksCode"
//                                 }
//                             })
// const body = await response.json()
// console.log(body)

// await expect(response.status()).toBe(200)


// })

// test('create a graph',async({request})=>{

// const response = await request.post(`https://pixe.la/v1/users/`+userid+`/graphs`,
//                                     {
//                                       data:{  "id":graph,
//                                               "name":"cycling habit345",
//                                               "unit":"km",
//                                               "type":"int",
//                                               "color":"shibafu",
//                                               "timezone":"Asia/Tokyo",
//                                               "description":"This is a graph for test.",
//                                               "isSecret":true,
//                                               "publishOptionalData":true
//                                               },
//                                       headers:{"X-USER-TOKEN":"env@Learning"}
                                      
//                                     })
//  const body = await response.json()
//  console.log(body)

 
//  await expect(response.status()).toBe(200)
// })

// test.only('post a pixel',async({request})=>{

//   const response= await request.post('https://pixe.la/v1/users/'+userid+'/graphs/'+graph,{
//     data:{
//       "date":date,
//       "quantity":quantity
//     },
//     headers:{
//       "X-USER-TOKEN":"env@Learning"
//     }
//   })
//   const body = await response.json()
//   await expect(response.status()).toBe(200)
  

// })

// test('update a pixel',async({request})=>{
//  const response= await request.put('https://pixe.la/v1/users/'+userid+'/graphs/'+graph,
//   {
//     data:{"color":"ajisai"},
//     headers:{"X-USER-TOKEN":"env@Learning"},
//   })

//   const body = await response.json()
//   await expect(response.status()).toBe(200)

// })

