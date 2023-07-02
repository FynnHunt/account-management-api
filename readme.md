# Account management API

A simple account management API written in TypeScript. I've written this API to be easily extendable. New routes and models can easily be added.

This API was written for a coding test / task so hasn't had a huge amount of time put in to it. If I was to spend more time on the API I would make the following additions / improvements:

- Set up Knex.js for the data persistence layer / creating the database queries
- Set up a Dockerfile and docker-compose.yml with a linked postgres container to run / test locally
- Set up tests for each route and model function using jest
- Add some sanitization for returned account data
- Sanitize data received in API requests before posting to the DB
