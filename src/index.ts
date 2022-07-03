import { loadFiles } from '@graphql-tools/load-files';
import { ApolloServerPluginLandingPageGraphQLPlayground, gql } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import { config } from 'dotenv';
// import { resolvers } from "./modules/artists/resolvers/artists.resolver";
// import { artistsService } from "./modules/artists/services/artists.service";

import { ALTERNATIVE_PORT } from './constants';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = gql`
type Book {
  title: String
  author: String
}
type Query {
  books: [Book]
}

`

const resolvers = {
  Query: {
    books: () => books,
  },
};


config();
const PORT = Number(process.env['PORT']) || ALTERNATIVE_PORT;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    
    // dataSources: () => ({
      //   artistsService,
    // }),
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();