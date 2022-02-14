import express from "express";
const app = express()
const port = process.env.PORT || '3000'


// app.get('/student/delete/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`student data deleted ${req.params.id}`)
// })
// app.get('/product/:category/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`product category :${req.params.category} and product id:${req.params.id}`)
//     // const {category,id} = req.params
//     // res.send(`Product Category:${category} and Product id:${id}`)
// })
// app.get('/product/order/:year/and/:month',(req,res)=>{
//     console.log(req.params)
//     const { year,month} = req.params
//     res.send(`year: ${year} and Month :${month}`) 
// })
// app.get('/train/:from-:to',(req,res)=>{
//     console.log(req.params)
//     const {from ,to} = req.params
//     res.send(`Travelling From :${from} to:${to}`)
// })
// app.get('/location/:state.:city',(req,res)=>{
//     console.log(req.params)
//     const{state,city} = req.params
//     res.send(`State :${state} and city :${city}`)
// })

//Route Parameter with regex
// app.get('/student/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params)
//     res.send(`student data deleted ${req.params.id}`)
// })
// app.get('/:type/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`Post or article`)
// })

// app.get('/:type(post|article)/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`Post or article`)
// })
app.get('/user/:id',(req,res)=>{
    console.log(" this is user path ")
    res.send(`user id ok`)
    
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${3000}`)
})