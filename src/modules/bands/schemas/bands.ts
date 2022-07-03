import { gql } from 'apollo-server-core';

export default gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: String
    years: [String]
  }

  type Query {
    bands: [Band]
    band(id: ID!): Band
  }
`;
