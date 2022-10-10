import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

const userRouter = express.Router();

//@route GET api/auth/login
//@desc check if user is login
//@access public
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);
export default userRouter;
