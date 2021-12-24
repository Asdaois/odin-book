import User from "../models/User.js";
import Profile from "../models/Profile.js";
import FriendRequest from "../models/FriendRequest.js";

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getUser = (req, res, next) => {
  // await User.find({ _id: req.params.id }).exec((err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ result });
  //   });
  res.status(200).json({ message: "User Index" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getProfile = (req, res, next) => {
  // await Profile.find({ _id: req.params.id }).exec((err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     res.json({ result });
  //   });
  res.status(200).json({ message: "User Profile" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getFriendList = (req, res, next) => {
  // await Profile.find({ _id: req.params.id })
  //   .select("friends")
  //   .populate({
  //     path: "User",
  //     select: ["firstName", "lastName", "gender"],
  //   });
  res.status(200).json({ message: "User's friends" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getSearchResult = async (req, res, next) => {
  const { name, userUID } = req.params;

  const result = await User.find({
    uid: { $not: { $regex: userUID } },
    $or: [{ firstName: { $regex: name } }, { lastName: { $regex: name } }],
  })
    .select(["firstName", "lastName"])
    .exec();
  res.json({ message: `searched ${name}`, result });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const sendFriendRequest = async (req, res, next) => {
  const { userID, friendID } = req.params;

  // const friendRequest = new FriendRequest({
  //   requestingUserID: userID,
  //   receivingUserID: friendID,
  //   status: "Pending",
  // });

  // try {
  //   await friendRequest.save();
  //   res.json({ message: `Request sent to ${friendID} from ${userID}` });
  // } catch (err) {
  //   next(err);
  // }

  res
    .status(200)
    .json({ message: `Request sent to ${friendID} from ${userID}` });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const createNewUser = async (req, res, next) => {
  const { displayName, dateOfBirth, email, gender, uid } = req.body;

  let user = null;

  if (uid) user = await User.findOne({ uid });

  if (displayName !== undefined && !user) {
    const splitName = displayName.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];
    try {
      const user = new User({
        uid: uid,
        firstName,
        lastName,
        dateOfBirth,
        email,
        gender,
      });
      await user.save();
      res.json({ message: "User created" });
    } catch (err) {
      next(err);
    }
  } else {
    res.json({ message: "Error creating the user" });
  }
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const updateUser = async (req, res, next) => {
  // const {
  //   firstName,
  //   lastName,
  //   dateOfBirth,
  //   email,
  //   password,
  //   gender,
  // } = req.body;
  // try {
  //   const user = await User.findOne({ _id: req.params.id }).exec();
  //   user = {
  //     firstName,
  //     lastName,
  //     dateOfBirth,
  //     email,
  //     password,
  //     gender,
  //   };
  //   await user.save();
  //   res.json({ message: "User created" });
  // } catch (err) {
  //   next(err);
  // }
  res.status(200).json({ message: "User updated" });
};

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  // await User.findOneAndDelete({ _id: req.params.id }, (err) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json({ message: "User deleted" });
  // });
  res.status(200).json({ message: "User deleted" });
};

/**
 * Get User With firebase uid
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getUserWithUid = async (req, res, next) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export {
  getUser,
  getProfile,
  getFriendList,
  getSearchResult,
  sendFriendRequest,
  createNewUser,
  updateUser,
  deleteUser,
  getUserWithUid,
};
