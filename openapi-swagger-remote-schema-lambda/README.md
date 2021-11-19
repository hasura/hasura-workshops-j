# openapi-swagger-remote-schema

[openapi-to-graphql](https://github.com/IBM/openapi-to-graphql) translates APIs described by OpenAPI Specifications (OAS) or Swagger into GraphQL. This server uses that package as a dependency to convert OAS to GraphQL.

### Deploy as AWS Lambda function

Create a lambda function in AWS. This will be our webhook.

1. In this folder, run `npm install`
2. Then create a zip: `zip -r openapi-to-graphql.zip .`
3. Create a Lambda function.
4. Select Node.js 8.10 as the runtime.
5. Select "start from scratch".
6. Add API gateway as a trigger.
7. Add an API to API gateway.
8. Upload the zip from previous step. The handler function of your lambda will be `index.handler`.

