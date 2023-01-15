
export const typeDefs = `#graphql
type Query {
    games: [Game!]!
}

type Game {
    id: Int!
    name: String!
    publisher: String!
    releaseDate: String!
}
`

const games = [
    {
        id: 0,
        name: "Destiny 2",
        publisher: "Bungie",
        releaseDate: "09/2014",
    },
    {
        id: 1,
        name: "Elden Ring",
        publisher: "From Software",
        releaseDate: "02/2022",
    },
];

export const resolvers = {
    Query: {
        games: () => games,
    },
}
