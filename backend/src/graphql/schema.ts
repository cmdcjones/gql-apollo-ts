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

