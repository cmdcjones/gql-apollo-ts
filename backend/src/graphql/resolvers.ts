import { convertEpochSeconds } from "../utils";

// TODO: change query and resolvers to *actually* get all games
export const resolvers = {
    Query: {
        game: (_, args, { dataSources }) => {
            return dataSources.gameAPI.getGameByName(args.name);
        },
    },
    // Implement Game type with publisher field to resolve parent publisher field
    Game: {
        publisher: ({ id }, __, { dataSources }) => {
            return dataSources.gameAPI.getPublisher(id);
        },
        releaseDate: ({ first_release_date }) => {
            return convertEpochSeconds(first_release_date);
        },
        genres: ({ genres }, __, { dataSources }) => {
            return dataSources.gameAPI.getGenres(genres);
        },
    },
}

