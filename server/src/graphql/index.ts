import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './types/posts';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
