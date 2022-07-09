import { gql } from 'apollo-server-core';

export default gql`
  type Track {
    id: ID
    title: String
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  input TrackInput {
    title: String!
    album: AlbumInput
    artists: [ID]
    bands: [ID]
    duration: Int
    released: Int
    genres: [ID]
  }

  type Query {
    tracks(limit: Int = 5, offset: Int = 0): [Track]
    track(id: ID!): Track
  }

  type Mutation {
    createTrack(input: TrackInput!): Track
    updateTrack(id: ID!, input: TrackInput!): Track
    deleteTrack(id: ID!): DELETE
  }

`;
