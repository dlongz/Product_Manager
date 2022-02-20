const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000


// MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// mongoose config
require('./Config/mongoose.config')

// CORS
app.use(cors({
    origin: "http://localhost:3000"
}))

// routes export
const productRoutes = require('./Routes/product.routes')
productRoutes(app)

app.listen(port, ()=> console.log(`We have made it to port ${port}! Welcome!`))