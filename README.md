# Awesome Links - part-1

This branch has the same starting point as [this article](https://prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw)

## Nexus

******* write here *******

## Apollo Client  

Apollo Client is a graphql client. This is library that make it easier when working with graphql. Graphql Clients handle stuff like caching, updating the UI, Pagination and etc. There are many Graphql Clients out there like graphql request, urql and Apollo Client. For this one we use Apollo Client.

To use we had to install:

>npm install @apollo/client

Then created a file at lib folder called **apollo.ts**. There we created our instance of the apollo client.
Had to wrap our app with the apollo provider at _app.ts file and now apollo client can be used in all files.  
  

database was greated at https://www.prisma.io/