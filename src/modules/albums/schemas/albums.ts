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

  input InputAlbum {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    tracksIds: [ID]
    genresIds: [ID]
    image: String
  }

  type Query {
    albums(pagination: Pagination): [Album]
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: InputAlbum!): Album
    updateAlbum(id: ID!, input: InputAlbum!): Album
    deleteAlbum(id: ID!): deleteResponse
  }
`;

// album(id: ID!): Album
