# Instructions

## Setup

- Edit / Add java code in `spring-graal-gql-demo`

- Build the dockerfile: `docker build -t logical-fields-java .`
- Run Hasura: `docker-compose up`

- Add the Java remote fields:
  - Head to Remote Schemas > Add Schema 
  - The remote schema URL is: `http://localhost:8081/graphql`

- Test it out via the Hasura GraphQL API or by adding remote fields
