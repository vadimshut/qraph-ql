import { gql } from 'apollo-server-core';

export default gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type JWT {
    jwt: String
  }

  type Query {
    user(id: ID!): User
    login(email:String, password:String): JWT
    register(firstName:String!, lastName:String!, password:String!, email:String!, favouriteArtistIds:[String], favouriteSongsIds:[String], favouriteBandsIds:[String], favouriteGenresIds:[String]): User
    jwt: JWT
   
  }
`;



// export default gql`
//   type User {
//     id: ID!
//     firstName: String
//     secondName: String
//     password: String
//     email: String!
//   }

  // type JWT {
  //   jwt: String
  // }

//   type Query {
//     user(id: ID!): User
//     login(email:String, password:String): JWT
//     register(firstName:String!, lastName:String!, password:String!, email:String!, favouriteArtistIds:[String], favouriteSongsIds:[String], favouriteBandsIds:[String], favouriteGenresIds:[String])
//     jwt: JWT
//   }
// `;