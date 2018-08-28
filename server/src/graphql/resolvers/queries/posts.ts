import Posts from '../../../models/posts';
import { project } from '../../projection/projection';

let post = async (root: object, args: { id: string }, ctx: object, info: object) => {
  const proj = project(info);
  let result = await Posts.findById(args.id, proj);
  return result;
};

let posts = async (root: object, args: { id: string }, ctx: object, info: object) => {
  const proj = project(info);
  let result = await Posts.find({}, proj);
  return result;
};

export { post, posts };
