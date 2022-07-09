import { gql } from 'apollo-server-core';

export default gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favourites(limit: Int = 5, offset: Int = 0): Favourites
  }

  type Mutation {
    addTrackToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
    deleteTrackFromFavourites(id: ID!): Favourites
    deleteBandFromFavourites(id: ID!): Favourites
    deleteArtistFromFavourites(id: ID!): Favourites
    deleteGenreFromFavourites(id: ID!): Favourites
  }
`;
