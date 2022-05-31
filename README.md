E-Com-BE by Gerard Mennella

# Summary
This repository contains the backend to an E-Commerce platform. It follows industry standards such as RESTful APIs and CRUD. It uses mySQL and the ORM used for this project is sequelize. This project was tested thoroughly using insomnia.

# Code Breakdown
## config/connection.js
This file creates the sequelize connection and exports it to be used by server.js

## db/schema.sql
This file creates the ecommerce_db database after dropping it if it exists.

## models
The files in this folder create the models for the tables in the ecommerce_db database. The index defines the table relationships and exports them. 

## routes/api
### category-routes.js
This file creates the findAll, findOne, update, create, and delete routes for the categories.
### product-routes.js
This file creates the findAll, findOne, update, create, and delete routes for the products.
### tag-routes.js
This file creates the findAll, findOne, update, create, and delete routes for the tags.

## Seeds
The files in this folder seed the tables in the ecommerce_db database with sample information so the routes can be tested.

## server.js
This file starts the server and syncs it to sequelize.


# Video Walkthrough
https://drive.google.com/file/d/1TPgdoAPFkR3IdJcYVDmWJJ5dsBACjF9B/view