import { gql } from 'apollo-server-express';

export default gql`
  type JWT {
    jwt: String
  }

  type User {
    id: ID!
    firstName: String!
    secondName: String!
    password: String!
    email: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    favouriteArtistIds: [String]
    favouriteSongsIds: [String]
    favouriteBandsIds: [String]
    favouriteGenresIds: [String]
  }

  type Query {
    login(email: String!, password: String!): JWT
    user(id: ID!): User
  }

  type Mutation {
    registration(input: UserInput): User
  }
`;
