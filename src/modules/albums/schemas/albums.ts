import { gql } from 'apollo-server-core';

export default gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    albums: [Album]
  }
`;

// album(id: ID!): Album
