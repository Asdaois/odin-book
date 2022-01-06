import Post from "../models/Post.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const getPosts = async (req, res, next) => {
  // Todo: Get more
  try {
    const lastPosts = await Post.find().limit(5).populate("userID");
    res.json(lastPosts);
  } catch (error) {
    next(error);
  }
};
/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getPost = async (req, res, next) => {
  //   await Post.findById(req.params.id).exec((err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ message: `Post found`, post: result });
  //   });
  res.json({ message: `Post ${req.params.id} page` });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createPost = async (req, res, next) => {
  //   const { userID, date, content } = req.params;

  const post = new Post({
    ...req.body,
  });
  try {
    await post.save();
    res.json({ message: "Post created!" });
  } catch (err) {
    if (err) return next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const updatePost = async (req, res, next) => {
  //   const { content, postID } = req.params;

  //   try {
  //     const post = await Post.findById(postID).exec();
  //     post = {
  //       content,
  //     };
  //     await post.save();
  //     res.json({ message: `Post ${req.params.id} updated!` });
  //   } catch (err) {
  //     if (err) return next(err);
  //   }

  res.json({ message: `Post ${req.params.id} updated!` });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const likePost = async (req, res, next) => {
  //   const { postID, userID, liked } = req.params;
  //   try {
  //     const post = await Post.findByIdAndUpdate(
  //       postID,
  //       {
  //         $addToSet: { likedBy: { userID, liked } },
  //       },
  //       (err) => {
  //         if (err) return next(err);
  //         res.json({ message: `Post liked` });
  //       }
  //     );
  //   } catch (err) {
  //     if (err) return next(err);
  //   }
  res.json({ message: "Post liked!" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const deletePost = async (req, res, next) => {
  //   await Post.findByIdAndDelete(req.params.id, (err) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ message: `Post ${req.params.id} deleted!` });
  //   });

  res.json({ message: `Post ${req.params.id} deleted!` });
};

export { getPost, createPost, updatePost, likePost, deletePost };
