'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const resolvers = require('./lib/resolvers')

const app = express()
const PORT = process.env.PORT || 3000
const isDev = process.env.NODE_ENV !== 'production'

// Definimos schema inicial
const typeDefs = readFileSync(
  join(__dirname,'lib','schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema({
  typeDefs, 
  resolvers
})

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/api`)
})

Array.prototype.buscarPor_id = function(_id){
  return this.find(e => e._id === _id)
}
