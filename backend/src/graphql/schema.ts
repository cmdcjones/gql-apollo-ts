
export const typeDefs = `#graphql
type Query {
    "Get a non-null list of non-null Game objects"
    games: [Game!]!
}

type Game {
    id: Int!
    name: String!
    publisher: String!
    releaseDate: String!
    genre: Genre!
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
        releaseDate: "09/2017",
        genre: {
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
        releaseDate: "02/2022",
        genre: {
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
