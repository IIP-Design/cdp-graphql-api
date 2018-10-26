import express from 'express';
import graphqlHTTP from 'express-graphql';

import { cdpSchema } from './schema';

const app = express();

app.use( '/graphql', graphqlHTTP( {
  schema: cdpSchema,
  graphiql: true
} ) );

app.listen( 4000, () => console.log( 'API available at localhost:4000/graphql' ) );
