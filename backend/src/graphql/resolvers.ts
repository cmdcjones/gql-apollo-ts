export const resolvers = {
    Query: {
        games: (_, __, { dataSources }) => {
            return dataSources.gameAPI.getDestiny2();
        },
    },
    // Implement Game type with publisher field to resolve parent publisher field
    Game: {
        publisher: ({ id }, __, { dataSources }) => {
            return dataSources.gameAPI.getPublisher(id);
        },
    },
}

