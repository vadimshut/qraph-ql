import { gql } from 'apollo-server-core';

export default gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks: [Genre]
    track(id: ID!): Genre
  }
`;
