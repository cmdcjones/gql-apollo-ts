export const typeDefs = `#graphql
type Query {
    "Get a non-null list of non-null Game objects"
    games: [Game!]!
}

type Game {
    id: Int!
    name: String!
    publisher: String!
    releaseDate: Int!
    genres: Genre!
}

type Genre {
    categories: [String!]!
}
`

const games = [
    {
        id: 0,
        name: "Destiny 2",
        publisher: "Bungie",
        releaseDate: 1504656000,
        genres: {
            categories: [
                "Looter-Shooter",
                "First Person Shooter",
            ]
        },
    },
    {
        id: 1,
        name: "Elden Ring",
        publisher: "From Software",
        releaseDate: 1645747200,
        genres: {
            categories: [
                "Action",
                "Adventure",
                "RPG",
            ]
        },
    },
];

export const resolvers = {
    Query: {
        games: () => games,
    },
}
