# Instructions

## Setup

`Dockerfile.combined-spring` = Java Spring app with a sample REST endpoint at `/greeting` and sample GraphQL schema with a `sayHello($name: String!)` query

- `docker compose up`
- Java app should now be available on port `8081`
    - Hasura for Java app should be available on port `8060`
