export default `type Query {
                  post(id: ID!): Post
                  posts: [Post]
                }

                type Mutation {
                  updatePost(id: ID!, description: String!,imageUrl:String!): Post
                  createPost(description: String!,imageUrl:String!):Post
                }

                type Post {
                  id: ID!
                  description: String!
                  imageUrl: String!
                }`;
