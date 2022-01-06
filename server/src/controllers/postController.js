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
    const lastPosts = await Post.find()
      .limit(5)
      .populate("userID")
      .populate("comments");
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
 * Create comment
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createComment = async (req, res, next) => {
  try {
    // postType should be included in the body of the request
    const comment = new Post({
      ...req.body,
    });
    await comment.save();
    Post.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { comments: comment._id },
      },
      (err) => {
        if (err) return next(err);
        return res.json({ message: "Comment created!" });
      }
    );
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
 * Like a post
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const likePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userID } = req.body;
    await Post.findByIdAndUpdate(
      id,
      {
        $addToSet: { likedBy: userID },
      },
      (err) => {
        if (err) return next(err);
        res.json({ message: `Post ${id} liked` });
      }
    );
  } catch (err) {
    if (err) return next(err);
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).exec();

    if (post === null) {
      let error = new Error("Post not found");
      error.status = 404;
      return next(error);
    }

    await post.remove((err) => {
      if (err) return next(err);
      return res.json({ message: `Post deleted` });
    });
  } catch (err) {
    if (err) return next(err);
  }
};

export { createComment, createPost, deletePost, getPost, likePost, updatePost };
