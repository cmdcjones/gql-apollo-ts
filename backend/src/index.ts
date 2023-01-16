import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => console.log(`Apollo Server ready at: ${url}`));

// const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
// });
// 
// console.log(`Apollo Server ready at ${url}`);
