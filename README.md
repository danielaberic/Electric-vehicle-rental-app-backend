# Summer-Camp-2022-Backend

Backend boilerplate for Profico Summer-Camp-2022 project

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First, make sure you have `Node.js` (**npm** or **yarn**) installed.

```
$ node -v
v16.13.0
```

### Running the application

```
$ npm run dev
```

or

```
$ yarn dev
```

# Project structure

```
.
├── controllers
│ └── index.js
├── models
│ └── index.js
├── repoository
│ └── index.js
├── routes
│ ├── index.js
│ └── users.routes.js
├── services
│ └── index.js
├── utilities
│ └── logger.js
├── LICENSE
├── README.md
├── app.js
├── package-lock.json
└── package.json
```

# Concepts

Before starting, let's define some important concepts, tools and dependencies which will be needed to be familiar with

Node.js
It’s a JavaScript runtime built on Chrome's V8 JavaScript engine. The Node.js run-time environment includes everything you need to execute a program written in JavaScript. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, which allows Node.js to be very performant. Node.js is not a language, it is a runtime

npm (Node package manager)
It provides a set of packages that developers can use in their apps to make the development faster and efficient. Those libraries were previously built by the community, in fact it’s possible to create own modules

MVC pattern
The Model View Controller is a very used architectural pattern that tries to separates an application in three well-defined different parts. The Model is in charge of all data-related logic that the application interacts with. The View module is related to the UI logic and the Controller is a set of components that are able to process all the business logic and incoming requests manipulating the data from the Model. The main idea is that the Controller is like the core. It receives the data from the Model, process it and then the data is sent to the View. View should not able to interact with the Model
