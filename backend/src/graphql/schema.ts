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
}

type Genre {
    categories: [String!]!
}

`

