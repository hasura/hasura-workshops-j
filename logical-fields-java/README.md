# Instructions

## Setup

- Edit / Add java code in `spring-graal-gql-demo`

- Build the dockerfile: `docker build -t logical-fields-java .`
- Run Hasura: `docker-compose up`

- Add the Java remote fields:
  - Head to Remote Schemas > Add Schema 
  - The remote schema URL is: `http://localhost:8081/graphql`

- Test it out via the Hasura GraphQL API or by adding remote fields


## Example

<img width="1680" alt="Screen Shot 2021-12-08 at 10 13 48 AM" src="https://user-images.githubusercontent.com/131160/145261988-32d285c6-dfb6-45db-b3b5-2904ce442140.png">
