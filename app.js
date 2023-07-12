const dotenv = require('dotenv')
require('express-async-errors')


const express = require('express')
const app = express()
const mainRouter = require('./routes/main')


const notFoundMiddleware = require('./middlewares/not-found')
const errorHnadlerMiddleware = require('./middlewares/error-handler')


// middleware 
app.use(express.static('./public'))
app.use(express.json())
dotenv.config({path:'./config.env'});

app.use('/api/v1',mainRouter)


app.use(notFoundMiddleware)
app.use(errorHnadlerMiddleware)

const port = process.env.PORT || 3000


const start = async ()=>{
    try{
        app.listen(port,console.log(`Server listening on ${port}...`))

    }catch(err){console.log(err)}
}

start()