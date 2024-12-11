const express = require('express')
const cors = require('cors')
const cartRouter = require('./router/cart')

const app = express()

const PORT = "3000"

app.use(cors())
app.use("/cart",cartRouter)


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})