import { gql } from 'apollo-server-core';

export default gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }

  input ArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bandsIds: [ID]
    instruments: [String]
  }

  type Query {
    artists(limit: Int = 5, offset: Int = 0): [Artist]
    artist(id: ID!): Artist
  }

  type Mutation {
    createArtist(input: ArtistInput!): Artist
    updateArtist(id: ID!, input: ArtistInput!): Artist
    deleteArtist(id: ID!): DELETE
  }
`;
