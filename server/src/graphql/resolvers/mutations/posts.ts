import Posts from '../../../models/posts';
import { project } from '../../projection/projection';

let updatePost = async (root: object, args: { id: string, postname: string }, ctx: object, info: object) => {
  const proj = project(info);
  await Posts.updateOne({ _id: args.id }, { $set: { postname: args.postname } }, proj);
  let result = await Posts.findById(args.id, proj);
  return result;
};

let createPost = async (root: object, args: { postname: string }) => {
  let result = await Posts.create({ postname: args.postname });
  return result;
};

export { updatePost, createPost };
