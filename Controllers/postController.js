import Post from "../Models/postModel.js";

export const createPost = async (req, res) => {
  const post = await Post.create({ text: req.body.text, image: req.body.image, user: req.user.id });
  res.json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name avatar").sort({ createdAt: -1 });
  res.json(posts);
};