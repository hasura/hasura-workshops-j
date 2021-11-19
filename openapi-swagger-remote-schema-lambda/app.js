const express = require('express')
const graphqlHTTP = require('express-graphql')
const { createGraphQlSchema } = require('openapi-to-graphql')
const oas = require('./openapi.json');

// generate schema:
const { schema, report } = createGraphQlSchema(oas)

// server schema:
const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

module.exports = app;
