import Posts from '../../../models/posts';
import { project } from '../../projection/projection';

let updatePost = async (root: object, args: { id: string, description: string, imageUrl: string }, ctx: object, info: object) => {
  const proj = project(info);
  await Posts.updateOne({ _id: args.id }, { $set: { description: args.description, imageUrl: args.imageUrl } }, proj);
  let result = await Posts.findById(args.id, proj);
  return result;
};

let createPost = async (root: object, args: { description: string, imageUrl: string }) => {
  let result = await Posts.create({ description: args.description, imageUrl: args.imageUrl });
  return result;
};

export { updatePost, createPost };
