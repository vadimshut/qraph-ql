import { ApolloServerPluginLandingPageGraphQLPlayground, AuthenticationError, gql } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import { config } from 'dotenv';
import { ALTERNATIVE_PORT } from './constants';

import resolvers from './modules/resolvers';
import services from './modules/services';
import types from './modules/typesDefs';

config();
const PORT = Number(process.env['PORT']) || ALTERNATIVE_PORT;
const typeDefs = types;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => services,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req }) => {
      const token = req.headers.authorization;
      // if (!token) throw new AuthenticationError("Error! User must be logged in services");
      return { token };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();
