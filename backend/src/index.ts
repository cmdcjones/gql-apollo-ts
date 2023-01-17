import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { GameAPI } from "./datasources/gameApi";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
    // create context to share datasources to resolvers
    context: async () => {
        return {
            dataSources: {
                gameAPI: new GameAPI(),
            }
        }
    },
}).then(({ url }) => console.log(`Apollo Server ready at: ${url}`));

// TODO: transition schema to .graphql to leverage graphql type codegen
