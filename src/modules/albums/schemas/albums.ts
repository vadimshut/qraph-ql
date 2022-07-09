import { gql } from 'apollo-server-core';

export default gql`
  type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input AlbumInput {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    tracksIds: [ID]
    genresIds: [ID]
    image: String
  }

  type Query {
    albums(limit: Int = 5, offset: Int = 0): [Album]
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: AlbumInput!): Album
    updateAlbum(id: ID!, input: AlbumInput!): Album
    deleteAlbum(id: ID!): DELETE
  }
`;
