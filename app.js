const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Connected to port ${PORT}`))