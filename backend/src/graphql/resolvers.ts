// const games = [
//     {
//         id: 0,
//         name: "Destiny 2",
//         publisher: "Bungie",
//         releaseDate: 1504656000,
//         genres: {
//             categories: [
//                 "Looter-Shooter",
//                 "First Person Shooter",
//             ]
//         },
//     },
//     {
//         id: 1,
//         name: "Elden Ring",
//         publisher: "From Software",
//         releaseDate: 1645747200,
//         genres: {
//             categories: [
//                 "Action",
//                 "Adventure",
//                 "RPG",
//             ]
//         },
//     },
// ];

export const resolvers = {
    Query: {
        games: (_, __, { dataSources }) => {
            return dataSources.gameAPI.getDestiny2();
        },
    },
}

