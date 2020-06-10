const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log("trigger middleware1")
    next("Hello next middleware")
})

app.use((param, req, res, next) => {
    console.log("trigger middleware2")
    console.log(`param received [${param}]`)
    next()
})

app.get('/', (req, res) => {
    res.send("<b>Hello</b>")
})
app.listen(8000, () => {
    console.log("Start listening 8000")
})
