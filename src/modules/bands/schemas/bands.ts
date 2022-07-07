import { gql } from 'apollo-server-core';

export default gql`
  type Band {
    id: ID
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    id: ID
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    artist: ID!
    instrument: String
    years: [String]
  }

  input BandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genres: [ID]
  }

  type Query {
    bands(limit: Int = 5, offset: Int = 0): [Band]
    band(id: ID!): Band
  }
`;
// band(id: ID!): Band

// type Mutation {
//   createBand(input: InputBand!): Band
//   updateBand(id: ID!, input: InputBand!): Band
//   deleteBand(id: ID!): deleteResponse
// }
