const express = require('express')
const app = express()
const router = require('./src/modules/routes')
let cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log('Server is running in 4000'))