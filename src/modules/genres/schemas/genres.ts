import { gql } from 'apollo-server-core';

export default gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input GenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    genres(limit: Int = 5, offset: Int = 0): [Genre]
    genre(id: ID!): Genre
  }

  type Mutation {
    createGenre(input: GenreInput!): Genre
    updateGenre(id: ID!, input: GenreInput!): Genre
    deleteGenre(id: ID!): DELETE
  }
`;
