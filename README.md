# microservice_graphql
Microservice using Node.js & GraphQL with Docker and React

API Interface:
api-gateway> yarn watch
http://localhost:7001/

GraphQL Interface:
> docker-compose up
http://localhost:7000/graphql

View DB:
> docker-compose up
> docker ps

For Listings:
> docker exec -it microservice_graphql_listings-service-db_1 bash
> mysql -uroot -ppassword
> SHOW DATABASES;
> USE db;
> SHOW TABLES;
> DESCRIBE listings;
> SELECT * FROM listings;
> INSERT INTO listings (id, title, description, createdAt, updatedAt) VALUES ("1", "Listing Title", "Listing Description", "2021-01-19 03:14:07.000000", "2021-01-19 03:14:07.000000");

For Users:
> docker exec -it microservice_graphql_users-service-db_1 bash
> mysql -uroot -ppassword
> SHOW DATABASES;
> USE db;
> SHOW TABLES;
> DESCRIBE users;
> SELECT * FROM users;
> INSERT INTO listings (id, email, password, createdAt, updatedAt) VALUES ("1", "user@email.com", "password", "2021-01-19 03:14:07.000000", "2021-01-19 03:14:07.000000");

Example GraphQL Commands:
mutation {
    createUser(email: "test@user.com", password: "password") {
        id
    }
    createUserSession(email: "test@user.com", password: "password") {
        id
        user {
            email
            id
        }
    }
    createListing(description: "This is the Listings description", title: "Title of the Listing") {
        id
    }
}
