// TODO: change query and resolvers to *actually* get all games

export const typeDefs = `#graphql
type Query {
    "Get a non-null list of non-null Game objects"
    game(name: String!): [Game!]!
}

type Game {
    id: Int!
    name: String!
    publisher: String!
    releaseDate: String!
    genres: [Genre]
}

type Genre {
    id: Int!
    name: String!
}
`

