export const resolvers = {
  Query: {
    links: async (_parant, _args, context) => await context.prisma.link.findMany()
  }
}