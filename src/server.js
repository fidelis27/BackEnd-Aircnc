const express= require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv/config')

const server = express()


mongoose.connect(process.env.URL_CONNECT_DB,
{ useNewUrlParser: true,
  useUnifiedTopology: true })

server.use(cors())  
server.use(express.json())
server.use('/files', express.static(path.resolve(__dirname,'..','uploads')))
server.use(routes)

server.listen(3333)

