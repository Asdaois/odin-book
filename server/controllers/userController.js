import User from "../models/User.js";
import Profile from "../models/Profile.js";

/**
 * @param {import("express").Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getUser = (req, res, next) => {
  // Las busquedas en la base de datos estaran comentadas hasta que se implemente la base
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
const createNewUser = async (req, res, next) => {
  // const {
  //   firstName,
  //   lastName,
  //   dateOfBirth,
  //   email,
  //   password,
  //   gender,
  // } = req.body;
  // const user = new User({
  //   firstName,
  //   lastName,
  //   dateOfBirth,
  //   email,
  //   password,
  //   gender,
  // });
  // try {
  //   await user.save();
  //   res.json({ message: "User created" });
  // } catch (err) {
  //   next(err);
  // }
  res.status(200).json({ message: "User created" });
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

export {
  getUser,
  getProfile,
  getFriendList,
  createNewUser,
  updateUser,
  deleteUser,
};
