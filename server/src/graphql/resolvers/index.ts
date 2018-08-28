import query from './queries';
import mutations from './mutations';
import _ from 'lodash';
import { resolvers } from '../projection/projection';

export default _.merge(resolvers, {
  Query: query,
  Mutation: mutations
});
