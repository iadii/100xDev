import { User } from "../models/users.models.js";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const updateInfoSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

const signup = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const { success } = signupSchema.safeParse({
    username,
    password,
    firstName,
    lastName,
  });
  if (!success) {
    return res.status(400).json({
      msg: "Incorrect input",
    });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(429).json({
      msg: "User already exist",
    });
  }
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRound);
  const user = await User.create({
    username,
    password: hashedPassword,
    firstName,
    lastName,
  });

  return res.status(201).json({
    msg: `User created successfully`,
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const { success } = loginSchema.safeParse({
    username,
    password,
  });
  if (!success) {
    return res.status(400).json({
      msg: "Incorrect input",
    });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      msg: `User not found`,
    });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      msg: `Invalid  Credentials`,
    });
  }
  // create jwt
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
  res.status(200).json({
    msg: `Login successful`,
    data: {
      id: user._id,
      username,
      Name: `${user.firstName} ${user.lastName}`,
      token,
    },
  });
};
const updateInfo = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({
      msg: `User not found`,
    });
  }
  const updateData = {};
  const { oldPassword, newPassword, firstName, lastName } = req.body();
  const { success } = updateInfoSchema.safeParse({
    oldPassword,
    newPassword,
    firstName,
    lastName,
  });
  if (!success) {
    return res.status(400).json({
      msg: "Incorrect input",
    });
  }
  if (firstName) updateData.firstName = firstName;
  if (lastName) updateData.lastName = lastName;
  const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({
      msg: `Incorrect current password`,
    });
  }
  updateData.password = await bcrypt.hash(newPassword, 10);
  await user
    .findByIdAndUpdate(userId, { $set: updateData }, { new: true })
    .select("-password");
};

export { signup, login, updateInfo };
