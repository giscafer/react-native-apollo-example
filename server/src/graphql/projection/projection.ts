import gqlProjection from 'graphql-advanced-projection';

const { project, resolvers } = gqlProjection({
  Post: {
    proj: {
      id: '_id'
    }
  }
});

export { project, resolvers };
