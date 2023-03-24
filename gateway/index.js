const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const GATEWAY_PORT = 8000
const CUSTOMER_SERVICE_URL = 'http://localhost:8001'
const PRODUCTS_SERVICE_URL = 'http://localhost:8002'
const DEFAULT_SERVICE_URL = 'http://localhost:8003'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/customer', proxy(CUSTOMER_SERVICE_URL))
app.use('/products', PRODUCTS_SERVICE_URL)
app.use('/', proxy(DEFAULT_SERVICE_URL))

app.listen(GATEWAY_PORT, () => {
    console.log(`Gateway listening on PORT: ${GATEWAY_PORT}`)
})