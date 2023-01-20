export const resolvers = {
    Query: {
        games: (_, __, { dataSources }) => {
            return dataSources.gameAPI.getDestiny2();
        },
    },
    // Implement Game type with publisher field to resolve parent publisher field
    Game: {
        publisher: ({ id }, __, { dataSources }) => {
            dataSources.gameAPI.getPublisher(id).then((response: Array<any>) => {
                const [{ id:_, name: publisherName }] = response
                return publisherName;
            });
        },
    },
}

