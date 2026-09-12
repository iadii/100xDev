import { User } from "../models/users.models.js";
import bcrypt from "bcryptjs";
const signup = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(429).json({
      msg: "User already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
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
  const user = User.findOne({username: username})
  if(!user){
    return res.status(404).json({
        msg: `User not found`
    })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if(!isPasswordCorrect){
    return res.status(401).json({
        msg: `Invalid  Credentials`
    })
  }
  // create jwt
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
  res.status(201).json({
    msg: `User created successfully`,
    data: {
        id: user._id,
        username,
        Name: `${user.firstName} ${user.lastName}`,
        token
    }
  })
};

export { signup, login };
