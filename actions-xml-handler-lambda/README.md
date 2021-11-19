# XML Handler for Hasura Actions


### Get started

1. Clone this repo
2. Update `config.js` with the right configuration
2. `npm i`
3. `node index.js`

### Deploy as AWS Lambda function

Create a lambda function in AWS. This will be our webhook.

1. In this folder, run `npm install`
2. Then create a zip: `zip -r xml-handler.zip .`
3. Create a Lambda function.
4. Select Node.js 8.10 as the runtime.
5. Select "start from scratch".
6. Add API gateway as a trigger.
7. Add an API to API gateway.
8. Upload the zip from previous step. The handler function of your lambda will be `index.handler`.
