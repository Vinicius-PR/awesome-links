
# Awesome Links - part-1

This project is a result of  [this article](https://prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw)
It teaches us how to create a simple full stack project called **Awesome Links**. It shows links and also the favorite links, that is bookmarked by the user.

It uses:
- NextJS
- TypeScript
- PostgreSQL
- Prisma & GraphQL
- Nexus
- Apollo-server
- GraphQL

## Nexus

Writing the resolvers and the schema by hand is not a problem. You just need to be careful with the naming.
For example at **schema.graphql** may have the query object:
```graphql
type  Query {
	links: [Link]!
}
```

So in the resolver should have a Query with same name. links. Like this:

```typescript
export  const  resolvers  = {
	Query: {
		links:  async (_parant, _args, context) =>  await  context.prisma.link.findMany()
	}
}
```
If it is not equal, it will fail.

When the file is small, it is ok to do like this. However, you may run into a trouble if there is a lot of queries and mutations. **Nexus** is a tool that help with this flow.

**Nexus** use the code-first approach. You build your schema using typecript or javascript. The good side that you get auto completion and, with typescript, type safety. Nexus will create the schema for you.

To use Nexus I created the schema.ts file. The content is: 

```typescript
import { makeSchema } from  "nexus";
import { join } from  "path";  

import  *  as  types  from  './types' 

export  const  schema  =  makeSchema({
	types,
	outputs: {
		typegen:  join(
		process.cwd(),
		'node_modules',
		'@types',
		'nexus-typegen',
		'index.d.ts'
		),
		schema:  join(process.cwd(), 'graphql', 'schema.graphql')
	},
	contextType: {
		export:  'Context',
		module:  join(process.cwd(), 'graphql', 'context.ts')
	}
})
```
The types are declared in the types folder and it is passed into the **makeSchema** from Nexus. The rest is configuration. When we start the app, nexus will create the schema file for use. In this case it will be inside the graphql folder and will be called **schema.graphql**.

Doing like this we don't need to worry about the schema file. Focus on the types and resolvers. Nexus will take care of the schema.

## Apollo Client  

Apollo Client is a graphql client. This is library that make it easier when working with graphql. Graphql Clients handle stuff like caching, updating the UI, Pagination and etc. There are many Graphql Clients out there like graphql request, urql and Apollo Client. For this one we use Apollo Client.

To use we had to install:

>npm install @apollo/client  

Then created a file at lib folder called **apollo.ts**. There we created our instance of the apollo client.

Had to wrap our app with the apollo provider at _app.ts file and then apollo client can be used in all files.

database was greated at https://www.prisma.io/